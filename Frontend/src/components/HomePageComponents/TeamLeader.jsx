import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { PlusIcon, FolderOpenIcon, CheckCircleIcon, XIcon, UserIcon, ClipboardCheckIcon } from 'lucide-react';
import { toast, Toaster } from 'sonner';

const TeamLeader = ({ userData }) => {
    const [activeProjectType, setActiveProjectType] = useState('current');
    const [selectedProject, setSelectedProject] = useState(null);
    const [isAddTaskModalOpen,  setIsAddTaskModalOpen] = useState(false);
    const [newTask, setNewTask] = useState({
        title: '',
        description: '',
        status: 'NOT_STARTED',
        projectId: null,
        developerId: ''
    });
    
    // Separate projects by status
    const [currentProjects, setCurrentProjects] = useState([]);
    const [completedProjects, setCompletedProjects] = useState([]);
    
    // Performance data (this would ideally come from an API)
    const [performanceData, setPerformanceData] = useState([
        { 
            name: 'Sprint 1', 
            sprintStoryPoints: 40, 
            cumulativeStoryPoints: 40,
            sprintCompletedTasks: 12,
            cumulativeCompletedTasks: 12
        },
        { 
            name: 'Sprint 2', 
            sprintStoryPoints: 55, 
            cumulativeStoryPoints: 95,
            sprintCompletedTasks: 18,
            cumulativeCompletedTasks: 30
        },
        { 
            name: 'Sprint 3', 
            sprintStoryPoints: 75, 
            cumulativeStoryPoints: 170,
            sprintCompletedTasks: 22,
            cumulativeCompletedTasks: 52
        },
        { 
            name: 'Sprint 4', 
            sprintStoryPoints: 90, 
            cumulativeStoryPoints: 260,
            sprintCompletedTasks: 28,
            cumulativeCompletedTasks: 80
        },
        { 
            name: 'Sprint 5', 
            sprintStoryPoints: 120, 
            cumulativeStoryPoints: 380,
            sprintCompletedTasks: 35,
            cumulativeCompletedTasks: 115
        }
    ]);

    // Parse project data from backend
    useEffect(() => {
        if (userData && userData.projects) {
            const current = userData.projects.filter(
                project => project.status === 'NOT_STARTED' || project.status === 'IN_PROGRESS'
            );
            const completed = userData.projects.filter(
                project => project.status === 'COMPLETED'
            );
            
            setCurrentProjects(current);
            setCompletedProjects(completed);
            
            // Set first project as selected by default if available
            if (current.length > 0 && !selectedProject) {
                setSelectedProject(current[0]);
                setNewTask(prev => ({ ...prev, projectId: current[0].id }));
            }
        }
    }, [userData]);

    async function markasCompleted(selectedProject){
         let status = false;
        const dummy = await new Promise((resolve) => {
            toast.promise(new Promise((resolve, reject) => {
                fetch("http://localhost:8080/mark-as-done", {
                    method: "POST",
                    body: JSON.stringify({ data: selectedProject }),
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }).then((resp) => resp.json())
                .then((data) => {
                    if(data.err) {
                        throw new Error(data.err);
                    }
                    resolve(data);
                })
                .catch((err) => reject(err));
            }), {
                loading: "Marking as completed... !",
                success: (data) => {
                    status = true;
                    resolve();
                    return (`Project Completed`);
                },
                error: (err) => {
                    resolve();
                    return (`${err}`);
                },
                style: {
                    fontSize: "1rem",
                    fontWeight: 200,
                    padding: 10,
                    color: "#ddf3ef", 
                    backgroundColor: "#1c1b1b",
                    borderColor: "#3b3b3b",
                    borderStyle: "solid",
                    borderWidth: "3px"
                }
            });
        });
        
        if(status) {
            // Update the projects state with the new task
            let d1 = completedProjects
            let d2 = currentProjects
            
            d2.splice(currentProjects.indexOf(selectedProject))
            d1.push(selectedProject)
            setCompletedProjects(d1)
            setCurrentProjects(d2)
            }
    }

    async function handleAddTask() {
        // Validate task fields
        if (!newTask.title || !newTask.description || !newTask.developerId) {
            toast.error('Please fill in all task details');
            return;
        }

        // In a real application, you would make an API call here
        const taskToAdd = {
            ...newTask,
            id: Math.floor(Math.random() * 1000) + 100, // Simulate ID generation
            updatedAt: new Date().toISOString()
        };

        let status = false;
        const dummy = await new Promise((resolve) => {
            toast.promise(new Promise((resolve, reject) => {
                fetch("http://localhost:8080/add-task", {
                    method: "POST",
                    body: JSON.stringify({ data: taskToAdd }),
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }).then((resp) => resp.json())
                .then((data) => {
                    if(data.err) {
                        throw new Error(data.err);
                    }
                    resolve(data);
                })
                .catch((err) => reject(err));
            }), {
                loading: "Adding Task to the database...",
                success: (data) => {
                    status = true;
                    resolve();
                    return (`Task added successfully!`);
                },
                error: (err) => {
                    resolve();
                    return (`${err}`);
                },
                style: {
                    fontSize: "1rem",
                    fontWeight: 200,
                    padding: 10,
                    color: "#ddf3ef", 
                    backgroundColor: "#1c1b1b",
                    borderColor: "#3b3b3b",
                    borderStyle: "solid",
                    borderWidth: "3px"
                }
            });
        });
        
        if(status) {
            // Update the projects state with the new task
            if (selectedProject) {
                const updatedProject = {
                    ...selectedProject,
                    tasks: [...(selectedProject.tasks || []), taskToAdd]
                };
                
                // Update the current projects or completed projects array
                if (activeProjectType === 'current') {
                    const updatedProjects = currentProjects.map(proj => 
                        proj.id === selectedProject.id ? updatedProject : proj
                    );
                    setCurrentProjects(updatedProjects);
                } else {
                    const updatedProjects = completedProjects.map(proj => 
                        proj.id === selectedProject.id ? updatedProject : proj
                    );
                    setCompletedProjects(updatedProjects);
                }
                
                // Update selected project
                setSelectedProject(updatedProject);
            }

            // Reset form and close modal
            setNewTask({
                title: '',
                description: '',
                status: 'NOT_STARTED',
                projectId: selectedProject?.id || null,
                developerId: ''
            });
            setIsAddTaskModalOpen(false);
        }
    }

    const updateTaskStatus = async (taskId, newStatus) => {
        if (!selectedProject) return;
        
        const updatedTasks = selectedProject.tasks.map(task => 
            task.id === taskId ? {...task, status: newStatus} : task
        );
        
        // API call would go here
        toast.success(`Task status updated to ${newStatus}`);
        
        // Update local state
        const updatedProject = {
            ...selectedProject,
            tasks: updatedTasks
        };
        
        if (activeProjectType === 'current') {
            const updatedProjects = currentProjects.map(proj => 
                proj.id === selectedProject.id ? updatedProject : proj
            );
            setCurrentProjects(updatedProjects);
        } else {
            const updatedProjects = completedProjects.map(proj => 
                proj.id === selectedProject.id ? updatedProject : proj
            );
            setCompletedProjects(updatedProjects);
        }
        
        setSelectedProject(updatedProject);
    };

    // Format status for display
    const formatStatus = (status) => {
        return status.replace(/_/g, ' ');
    };

    // Custom tooltip for chart
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;
            return (
                <div className="bg-gray-800 p-4 border border-gray-600 rounded-md shadow-lg">
                    <p className="text-white font-bold">{data.name}</p>
                    <p className="text-gray-300">Sprint Story Points: {data.sprintStoryPoints}</p>
                    <p className="text-gray-300">Cumulative Story Points: {data.cumulativeStoryPoints}</p>
                    <p className="text-gray-300">Sprint Completed Tasks: {data.sprintCompletedTasks}</p>
                    <p className="text-gray-300">Cumulative Completed Tasks: {data.cumulativeCompletedTasks}</p>
                </div>
            );
        }
        return null;
    };

    // Find developer name by ID
    const getDeveloperName = (developerId) => {
        const developer = userData.developers.find(dev => dev.id === developerId);
        return developer ? developer.username : 'Not Assigned';
    };

    // Get task status color
    const getTaskStatusColor = (status) => {
        switch (status) {
            case 'DONE':
                return 'bg-green-600/20 text-green-400';
            case 'IN_PROGRESS':
                return 'bg-yellow-600/20 text-yellow-400';
            default:
                return 'bg-gray-600/20 text-gray-400';
        }
    };

    // Get project status color
    const getProjectStatusColor = (status) => {
        switch (status) {
            case 'COMPLETED':
                return 'text-green-400';
            case 'IN_PROGRESS':
                return 'text-yellow-400';
            default:
                return 'text-gray-400';
        }
    };

    // Calculate project completion percentage
    const calculateCompletion = (project) => {
        if (!project.tasks || project.tasks.length === 0) return 0;
        const completedTasks = project.tasks.filter(task => task.status === 'DONE').length;
        return Math.round((completedTasks / project.tasks.length) * 100);
    };

    return (
        <div className="min-h-screen w-full flex" style={{ 
            background: 'linear-gradient(135deg, #2a2a2a 0%, #040404 100%)'
        }}>
            <Toaster position="bottom-right"/>
            
            {/* Sidebar for Projects */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="w-1/4 p-8 border-r border-gray-700 text-white"
            >
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Team Projects</h2>
                    <div className="bg-indigo-600 px-3 py-1 rounded-full text-xs">
                        Team Leader
                    </div>
                </div>

                {/* Project Type Toggle */}
                <div className="flex mb-6 bg-gray-900 rounded-full p-1">
                    <button
                        onClick={() => setActiveProjectType('current')}
                        className={`flex-1 py-2 rounded-full flex items-center justify-center ${
                            activeProjectType === 'current' 
                            ? 'bg-indigo-600 text-white' 
                            : 'text-gray-400 hover:bg-gray-800'
                        }`}
                    >
                        <FolderOpenIcon className="w-5 h-5 mr-2" />
                        Current
                    </button>
                    <button
                        onClick={() => setActiveProjectType('completed')}
                        className={`flex-1 py-2 rounded-full flex items-center justify-center ${
                            activeProjectType === 'completed' 
                            ? 'bg-indigo-600 text-white' 
                            : 'text-gray-400 hover:bg-gray-800'
                        }`}
                    >
                        <CheckCircleIcon className="w-5 h-5 mr-2" />
                        Completed
                    </button>
                </div>

                {/* Project List */}
                <div className="space-y-4">
                    {(activeProjectType === 'current' ? currentProjects : completedProjects).map((project) => (
                        <motion.div
                            key={project.id}
                            onClick={() => {
                                setSelectedProject(project);
                                setNewTask(prev => ({ ...prev, projectId: project.id }));
                            }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`p-4 rounded-lg border ${
                                selectedProject?.id === project.id 
                                ? 'border-indigo-500 bg-gray-900' 
                                : 'border-gray-700 hover:border-gray-600'
                            } cursor-pointer transition`}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="font-semibold text-lg">{project.name}</h3>
                                <span className={`text-xs px-2 py-1 rounded-full ${getProjectStatusColor(project.status)}`}>
                                    {formatStatus(project.status)}
                                </span>
                            </div>
                            <p className="text-gray-400 text-sm mt-2">
                                {project.description.length > 80 
                                    ? project.description.substring(0, 80) + '...' 
                                    : project.description}
                            </p>
                            
                            {/* Progress bar */}
                            <div className="mt-3">
                                <div className="flex justify-between text-xs mb-1">
                                    <span>Progress</span>
                                    <span>{calculateCompletion(project)}%</span>
                                </div>
                                <div className="w-full bg-gray-700 rounded-full h-2">
                                    <div 
                                        className="bg-indigo-600 h-2 rounded-full" 
                                        style={{ width: `${calculateCompletion(project)}%` }}
                                    ></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Project Details Section */}
            <motion.div 
                layout
                className="w-3/4 p-8 text-white"
            >
                {selectedProject ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mb-8 flex justify-between items-center">
                            <div>
                                <h1 className="text-3xl font-bold mb-2">{selectedProject.name}</h1>
                                <p className="text-gray-400">{selectedProject.description}</p>
                            </div>
                            <div className="flex space-x-2">
                                <span className={`text-sm px-3 py-1 rounded-full ${getProjectStatusColor(selectedProject.status)}`}>
                                    {formatStatus(selectedProject.status)}
                                </span>
                                <span className="text-sm px-3 py-1 rounded-full bg-indigo-600/20 text-indigo-400">
                                    {selectedProject.storyPoints} SP
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                            <div className="lg:col-span-2">
                                <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 mb-6">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-lg font-semibold">Tasks</h3>
                                        {selectedProject.status !== 'COMPLETED' && (
                                            <div className='flex space-x-3'>
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => setIsAddTaskModalOpen(true)}
                                                className="bg-indigo-600 text-white px-3 py-1 rounded-md flex items-center"
                                            >
                                                <PlusIcon className="w-4 h-4 mr-1" />
                                                Add Task
                                            </motion.button>
                                            {calculateCompletion(selectedProject)==100 ?(
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => markasCompleted(selectedProject)}
                                                className="bg-indigo-600 text-white px-3 py-1 rounded-md flex items-center"
                                            >
                                                <PlusIcon className="w-4 h-4 mr-1" />
                                                Mark as completed
                                            </motion.button>
                                            ):(<></>)}
                                            </div>
                                        )}
                                    </div>
                                    {selectedProject.tasks && selectedProject.tasks.length > 0 ? (
                                        <div className="space-y-3">
                                            {selectedProject.tasks.map((task) => (
                                                <div 
                                                    key={task.id}
                                                    className="bg-gray-800 p-4 rounded-lg border border-gray-700"
                                                >
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <h4 className="font-medium">{task.title}</h4>
                                                            <p className="text-sm text-gray-400 mt-1">{task.description}</p>
                                                            <div className="flex items-center mt-2">
                                                                <UserIcon className="w-4 h-4 text-gray-400 mr-1" />
                                                                <span className="text-sm text-gray-300">
                                                                    {getDeveloperName(task.developerId)}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col items-end space-y-2">
                                                            <span className={`text-xs px-2 py-1 rounded-full ${getTaskStatusColor(task.status)}`}>
                                                                {task.status}
                                                            </span>
                                                            {/* {selectedProject.status !== 'COMPLETED' && (
                                                                <div className="flex space-x-1 mt-2">
                                                                    <button 
                                                                        onClick={() => updateTaskStatus(task.id, 'NOT_STARTED')}
                                                                        className={`text-xs px-2 py-1 rounded ${task.status === 'NOT_STARTED' ? 'bg-gray-600' : 'bg-gray-800 hover:bg-gray-700'}`}
                                                                    >
                                                                        To Do
                                                                    </button>
                                                                    <button 
                                                                        onClick={() => updateTaskStatus(task.id, 'IN_PROGRESS')}
                                                                        className={`text-xs px-2 py-1 rounded ${task.status === 'IN_PROGRESS' ? 'bg-yellow-600' : 'bg-gray-800 hover:bg-gray-700'}`}
                                                                    >
                                                                        In Progress
                                                                    </button>
                                                                    <button 
                                                                        onClick={() => updateTaskStatus(task.id, 'DONE')}
                                                                        className={`text-xs px-2 py-1 rounded ${task.status === 'DONE' ? 'bg-green-600' : 'bg-gray-800 hover:bg-gray-700'}`}
                                                                    >
                                                                        Done
                                                                    </button>
                                                                </div>
                                                            )} */}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="flex flex-col items-center justify-center py-8 text-gray-400">
                                            <ClipboardCheckIcon className="w-12 h-12 mb-3" />
                                            <p className="text-center">
                                                No tasks assigned to this project yet.
                                                {selectedProject.status !== 'COMPLETED' && (
                                                    
                                                    <button 
                                                        onClick={() => setIsAddTaskModalOpen(true)}
                                                        className="text-indigo-400 hover:underline mt-2 inline-block"
                                                    >
                                                        Assign new tasks
                                                    </button>
                                                )}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div>
                                <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 mb-6">
                                    <h3 className="text-lg font-semibold mb-4">Project Overview</h3>
                                    <div className="space-y-3">
                                        <div>
                                            <p className="text-gray-400 text-sm">Status</p>
                                            <p className="font-medium">{formatStatus(selectedProject.status)}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-sm">Story Points</p>
                                            <p className="font-medium">{selectedProject.storyPoints}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-sm">Started On</p>
                                            <p className="font-medium">{new Date(selectedProject.createdAt).toLocaleDateString()}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-sm">Tasks Completed</p>
                                            <p className="font-medium">
                                                {selectedProject.tasks ? 
                                                    `${selectedProject.tasks.filter(t => t.status === 'DONE').length} of ${selectedProject.tasks.length}` : 
                                                    '0 of 0'}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                                    <h3 className="text-lg font-semibold mb-4">Team Members</h3>
                                    <div className="space-y-3">
                                        {userData.developers.map(developer => (
                                            <div key={developer.id} className="flex items-center p-2 hover:bg-gray-800 rounded-md">
                                                <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center mr-3">
                                                    <span className="text-white font-medium">
                                                        {developer.username.charAt(0)}
                                                    </span>
                                                </div>
                                                <div>
                                                    <p className="font-medium">{developer.username}</p>
                                                    <p className="text-xs text-gray-400">Developer</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {selectedProject.status === "COMPLETED" && (
                            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 text-white">
                                <h3 className="text-lg font-semibold mb-4">Project Performance</h3>
                                <ResponsiveContainer width="100%" height={300}>
                                    <LineChart data={performanceData}>
                                        <CartesianGrid 
                                            strokeDasharray="3 3" 
                                            stroke="#514d4d" 
                                            horizontal={true} 
                                            vertical={false} 
                                        />
                                        <XAxis 
                                            dataKey="name" 
                                            stroke="#gray-400" 
                                            tick={{ fill: '#888888' }} 
                                        />
                                        <YAxis 
                                            stroke="#gray-400" 
                                            tick={{ fill: '#888888' }} 
                                        />
                                        <Tooltip content={<CustomTooltip />} />
                                        <Legend />
                                        <Line 
                                            name="Cumulative Story Points"
                                            type="monotone" 
                                            dataKey="cumulativeStoryPoints" 
                                            stroke="#6366F1" 
                                            strokeWidth={3}
                                            dot={{ r: 6, fill: '#6366F1', stroke: '#6366F1' }}
                                            activeDot={{ r: 8, fill: '#6366F1', stroke: 'white', strokeWidth: 2 }}
                                        />
                                        <Line 
                                            name="Cumulative Completed Tasks"
                                            type="monotone" 
                                            dataKey="cumulativeCompletedTasks" 
                                            stroke="#10B981" 
                                            strokeWidth={3}
                                            dot={{ r: 6, fill: '#10B981', stroke: '#10B981' }}
                                            activeDot={{ r: 8, fill: '#10B981', stroke: 'white', strokeWidth: 2 }}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        )}
                    </motion.div>
                ) : (
                    <div className="h-full flex items-center justify-center text-gray-400">
                        Select a project to view details
                    </div>
                )}
            </motion.div>

            {/* Add Task Modal */}
            <AnimatePresence>
                {isAddTaskModalOpen && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-gray-900 rounded-lg p-8 w-full max-w-md border border-gray-700"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-white">Assign New Task</h2>
                                <motion.button
                                    whileHover={{ rotate: 90 }}
                                    onClick={() => setIsAddTaskModalOpen(false)}
                                    className="text-gray-400 hover:text-white"
                                >
                                    <XIcon className="w-6 h-6" />
                                </motion.button>
                            </div>

                            <form className="space-y-4">
                                <div>
                                    <label className="block text-gray-400 mb-2">Task Title</label>
                                    <input 
                                        type="text"
                                        value={newTask.title}
                                        onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                                        className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        placeholder="Enter task title"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-400 mb-2">Description</label>
                                    <textarea 
                                        value={newTask.description}
                                        onChange={(e) => setNewTask({...newTask, description: e.target.value})}
                                        className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 h-24"
                                        placeholder="Enter task description"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-400 mb-2">Status</label>
                                    <select
                                        value={newTask.status}
                                        onChange={(e) => setNewTask({...newTask, status: e.target.value})}
                                        className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    >
                                        <option value="NOT_STARTED">Not Started</option>
                                        <option value="IN_PROGRESS">In Progress</option>
                                        <option value="DONE">Done</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-gray-400 mb-2">Assign Developer</label>
                                    <select
                                        value={newTask.developerId}
                                        onChange={(e) => setNewTask({...newTask, developerId: parseInt(e.target.value)})}
                                        className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    >
                                        <option value="">Select Developer</option>
                                        {userData.developers.map(developer => (
                                            <option key={developer.id} value={developer.id}>
                                                {developer.username}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div className="flex justify-end space-x-4 mt-6">
                                    <motion.button
                                        type="button"
                                        onClick={() => setIsAddTaskModalOpen(false)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
                                    >
                                        Cancel
                                    </motion.button>
                                    <motion.button
                                        type="button"
                                        onClick={handleAddTask}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-6 py-3 bg-indigo-600 text-white rounded-lg"
                                    >
                                        Assign Task
                                    </motion.button>
                                </div>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default TeamLeader;