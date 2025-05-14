import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { PlusIcon, FolderOpenIcon, CheckCircleIcon, XIcon } from 'lucide-react';
import { toast, Toaster } from 'sonner';

const Manager = ({ userData }) => {
    const [activeProjectType, setActiveProjectType] = useState('current');
    const [selectedProject, setSelectedProject] = useState(null);
    const [isAddProjectModalOpen, setIsAddProjectModalOpen] = useState(false);
    console.log(JSON.stringify(userData))
    const [newProject, setNewProject] = useState({
        name: '',
        description: '',
        storyPoints: '',
        managerId: userData?.id,
        leaderId: '',
        tasks: []
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
            }
        }
    }, [userData]);

    async function handleAddProject  ()  {
        // Validate project fields
        if (!newProject.name || !newProject.description || !newProject.storyPoints || !newProject.leaderId) {
            alert('Please fill in all project details');
            return;
        }

        // In a real application, you would make an API call here
        // For now, we'll just simulate adding to the UI
        const projectToAdd = {
            ...newProject,
            id: Math.max(...currentProjects.map(p => p.id), 0) + 1,
            status: 'NOT_STARTED',
            isTaskCompleted: 'NO',
            createdAt: new Date().toISOString(),
            tasks: [],
            managerId:userData.id
        };
        let status = false
    const dummy =  await new Promise ((resolve)=>{
      toast.promise(new Promise((resolve,reject)=>{
        fetch("http://localhost:8080/add-project", {
          method: "POST",
          body: JSON.stringify({ data : projectToAdd }),
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }).then((resp) => resp.json())
        .then((data)=>{
          if(data.err){
            throw new Error(data.err)
          }
          resolve(data)
        })
        .catch((err)=> reject(err))
      }),{
        loading: "Adding Project to the database ...",
        success: (data)=>{
          status = true
          resolve()
          return (`Project added successfully.. !!`)
        },
        error: (err) => {
          resolve()
          return (`${err}`)
        },
        style: {
          fontSize:"1rem",
          fontWeight:200,
          padding:10,
          color:"#ddf3ef", 
          backgroundColor:"#1c1b1b",
          borderColor:"#3b3b3b",
          borderStyle:"solid",
          borderWidth:"3px"
        }
      })
    }) 
    
    if(status){
       setCurrentProjects([...currentProjects, projectToAdd]);

        // Reset form and close modal
        setNewProject({
            name: '',
            description: '',
            storyPoints: '',
            managerId: userData.id,
            leaderId: '',
            tasks: []
        });
        setIsAddProjectModalOpen(false);
    } 
        // Add to current projects
       
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

    // Find team leader name by ID
    const getTeamLeaderName = (leaderId) => {
        const leader = userData.teamLeaders.find(leader => leader.id === leaderId);
        return leader ? leader.username : 'Not Assigned';
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

    return (
        <div className="min-h-screen w-full flex" style={{ 
            background: 'linear-gradient(135deg, #2a2a2a 0%, #040404 100%)'
        }}>
            <Toaster position='bottom-right'/>
            {/* Sidebar for Projects */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="w-1/4 p-8 border-r border-gray-700 text-white"
            >
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Projects</h2>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-red-500 p-2 rounded-full"
                        onClick={() => setIsAddProjectModalOpen(true)}
                    >
                        <PlusIcon className="w-6 h-6" />
                    </motion.button>
                </div>

                {/* Project Type Toggle */}
                <div className="flex mb-6 bg-gray-900 rounded-full p-1">
                    <button
                        onClick={() => setActiveProjectType('current')}
                        className={`flex-1 py-2 rounded-full flex items-center justify-center ${
                            activeProjectType === 'current' 
                            ? 'bg-red-500 text-white' 
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
                            ? 'bg-red-500 text-white' 
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
                            onClick={() => setSelectedProject(project)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`p-4 rounded-lg border ${
                                selectedProject?.id === project.id 
                                ? 'border-red-500 bg-gray-900' 
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
                        <div className="mb-8">
                            <h1 className="text-3xl font-bold mb-4">{selectedProject.name}</h1>
                            <p className="text-gray-400">{selectedProject.description}</p>
                        </div>

                        <div className="grid grid-cols-3 gap-6 mb-8">
                            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                                <h3 className="text-lg font-semibold mb-4">Project Details</h3>
                                <div className="space-y-2">
                                    <p>
                                        <span className="text-gray-400">Story Points:</span>{' '}
                                        <span className="font-medium">{selectedProject.storyPoints}</span>
                                    </p>
                                    <p>
                                        <span className="text-gray-400">Status:</span>{' '}
                                        <span className="font-medium">{formatStatus(selectedProject.status)}</span>
                                    </p>
                                    <p>
                                        <span className="text-gray-400">Manager:</span>{' '}
                                        <span className="font-medium">{userData.username}</span>
                                    </p>
                                    <p>
                                        <span className="text-gray-400">Team Leader:</span>{' '}
                                        <span className="font-medium">{getTeamLeaderName(selectedProject.leaderId)}</span>
                                    </p>
                                    <p>
                                        <span className="text-gray-400">Created:</span>{' '}
                                        <span className="font-medium">{new Date(selectedProject.createdAt).toLocaleDateString()}</span>
                                    </p>
                                </div>
                            </div>

                            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                                <h3 className="text-lg font-semibold mb-4">Tasks</h3>
                                <div className="space-y-2">
                                    {selectedProject.tasks && selectedProject.tasks.length > 0 ? (
                                        selectedProject.tasks.map((task) => (
                                            <div key={task.id} className="flex items-center justify-between">
                                                <div>
                                                    <p>{task.title}</p>
                                                    <p className="text-xs text-gray-400">{task.description}</p>
                                                </div>
                                                <span className={`text-xs px-2 py-1 rounded-full ${getTaskStatusColor(task.status)}`}>
                                                    {task.status}
                                                </span>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-gray-400">No tasks created yet</p>
                                    )}
                                </div>
                            </div>

                            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                                <h3 className="text-lg font-semibold mb-4">Actions</h3>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full bg-red-500 text-white py-3 rounded-lg flex items-center justify-center mb-4"
                                    onClick={() => setIsAddProjectModalOpen(true)}
                                >
                                    <PlusIcon className="w-5 h-5 mr-2" />
                                    New Project
                                </motion.button>
                                
                                {/* {selectedProject.status !== 'COMPLETED' && (
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full border border-green-500 text-green-500 py-3 rounded-lg flex items-center justify-center"
                                    >
                                        <CheckCircleIcon className="w-5 h-5 mr-2" />
                                        Add Task
                                    </motion.button>
                                )} */}
                            </div>
                        </div>

                                    {selectedProject.status=="COMPLETED"?(

                                    
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
                                        stroke="#4CAF50" 
                                        strokeWidth={3}
                                        dot={{ r: 6, fill: '#4CAF50', stroke: '#4CAF50' }}
                                        activeDot={{ r: 8, fill: '#4CAF50', stroke: 'white', strokeWidth: 2 }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                        ):(<>
                                    </>)}
                    </motion.div>
                ) : (
                    <div className="h-full flex items-center justify-center text-gray-400">
                        Select a project to view details
                    </div>
                )}
            </motion.div>

            {/* Add Project Modal */}
            <AnimatePresence>
                {isAddProjectModalOpen && (
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
                            className="bg-gray-900 rounded-lg p-8 w-full max-w-2xl border border-gray-700"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-white">Create New Project</h2>
                                <motion.button
                                    whileHover={{ rotate: 90 }}
                                    onClick={() => setIsAddProjectModalOpen(false)}
                                    className="text-gray-400 hover:text-white"
                                >
                                    <XIcon className="w-6 h-6" />
                                </motion.button>
                            </div>

                            <form className="space-y-4">
                                <div>
                                    <label className="block text-gray-400 mb-2">Project Name</label>
                                    <input 
                                        type="text"
                                        value={newProject.name}
                                        onChange={(e) => setNewProject({...newProject, name: e.target.value})}
                                        className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                                        placeholder="Enter project name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-400 mb-2">Description</label>
                                    <textarea 
                                        value={newProject.description}
                                        onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                                        className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 h-24"
                                        placeholder="Enter project description"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-400 mb-2">Story Points</label>
                                        <input 
                                            type="number"
                                            value={newProject.storyPoints}
                                            onChange={(e) => setNewProject({...newProject, storyPoints: e.target.value})}
                                            className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                                            placeholder="Enter story points"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-400 mb-2">Team Leader</label>
                                        <select
                                            value={newProject.leaderId}
                                            onChange={(e) => setNewProject({...newProject, leaderId: parseInt(e.target.value)})}
                                            className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                                        >
                                            <option value="">Select Team Leader</option>
                                            {userData.teamLeaders.map(leader => (
                                                <option key={leader.id} value={leader.id}>
                                                    {leader.username}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="flex justify-end space-x-4 mt-6">
                                    <motion.button
                                        type="button"
                                        onClick={() => setIsAddProjectModalOpen(false)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
                                    >
                                        Cancel
                                    </motion.button>
                                    <motion.button
                                        type="button"
                                        onClick={handleAddProject}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-6 py-3 bg-red-500 text-white rounded-lg"
                                    >
                                        Create Project
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

export default Manager;