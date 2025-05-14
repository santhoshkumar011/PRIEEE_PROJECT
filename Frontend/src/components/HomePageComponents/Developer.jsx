import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { CheckCircleIcon, ClockIcon, ListTodoIcon, CheckIcon, XIcon, UserIcon, FolderIcon, ChevronRightIcon } from 'lucide-react';
import { toast, Toaster } from 'sonner';

const Developer = ({ userData }) => {
    const [activeTab, setActiveTab] = useState('current');
    const [selectedTask, setSelectedTask] = useState(null);
    const [isUpdateStatusModalOpen, setIsUpdateStatusModalOpen] = useState(false);
    const [newStatus, setNewStatus] = useState('');
    
    // Group tasks by status
    const [currentTasks, setCurrentTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);
    
    // Performance data (would come from API in a real app)
    const [performanceData, setPerformanceData] = useState([
        { name: 'Week 1', completedTasks: 3, storyPoints: 15 },
        { name: 'Week 2', completedTasks: 5, storyPoints: 25 },
        { name: 'Week 3', completedTasks: 2, storyPoints: 10 },
        { name: 'Week 4', completedTasks: 7, storyPoints: 35 },
        { name: 'Week 5', completedTasks: 4, storyPoints: 20 }
    ]);

    // Parse task data from userData
    useEffect(() => {
        if (userData && userData.tasks) {
            const current = userData.tasks.filter(
                task => task.status === 'PENDING' || task.status === 'IN_PROGRESS'
            );
            const completed = userData.tasks.filter(
                task => task.status === 'DONE'
            );
            
            setCurrentTasks(current);
            setCompletedTasks(completed);
            
            // Set first task as selected by default if available
            if (current.length > 0 && !selectedTask) {
                setSelectedTask(current[0]);
            }
        }
    }, [userData]);

    // Update task status handler
    const handleUpdateTaskStatus = async () => {
        if (!selectedTask || !newStatus) {
            toast.error('Please select a status');
            return;
        }

        const taskToUpdate = {
            ...selectedTask,
            status: newStatus,
            updatedAt: new Date().toISOString()
        };

        let status = false;
        const dummy = await new Promise((resolve) => {
            toast.promise(new Promise((resolve, reject) => {
                // In a real application, this would be an actual API call
                fetch("http://localhost:8080/mark-as-done-task", {
                    method: "POST",
                    body: JSON.stringify({ data: taskToUpdate }),
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
                loading: "Updating task status...",
                success: (data) => {
                    status = true;
                    resolve();
                    return (`Task status updated successfully!`);
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
            // Update local state with new task status
            const updatedTask = { ...selectedTask, status: newStatus };
            
            if (newStatus === 'DONE') {
                // Move task from current to completed
                setCurrentTasks(currentTasks.filter(task => task.id !== selectedTask.id));
                setCompletedTasks([...completedTasks, updatedTask]);
            } else if (selectedTask.status === 'DONE') {
                // Move task from completed to current
                setCompletedTasks(completedTasks.filter(task => task.id !== selectedTask.id));
                setCurrentTasks([...currentTasks, updatedTask]);
            } else {
                // Update task in current tasks
                setCurrentTasks(currentTasks.map(task => 
                    task.id === selectedTask.id ? updatedTask : task
                ));
            }
            
            // Update selected task
            setSelectedTask(updatedTask);
            
            // Close modal
            setIsUpdateStatusModalOpen(false);
        }
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

    // Get task status icon
    const getTaskStatusIcon = (status) => {
        switch (status) {
            case 'DONE':
                return <CheckCircleIcon className="w-5 h-5 text-green-400" />;
            case 'IN_PROGRESS':
                return <ClockIcon className="w-5 h-5 text-yellow-400" />;
            default:
                return <ListTodoIcon className="w-5 h-5 text-gray-400" />;
        }
    };

    // Format date nicely
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    // Custom tooltip for chart
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;
            return (
                <div className="bg-gray-800 p-4 border border-gray-600 rounded-md shadow-lg">
                    <p className="text-white font-bold">{data.name}</p>
                    <p className="text-gray-300">Completed Tasks: {data.completedTasks}</p>
                    <p className="text-gray-300">Story Points: {data.storyPoints}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="min-h-screen w-full flex" style={{ 
            background: 'linear-gradient(135deg, #2a2a2a 0%, #040404 100%)'
        }}>
            <Toaster position="bottom-right"/>
            
            {/* Sidebar for Tasks */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="w-1/4 p-8 border-r border-gray-700 text-white"
            >
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">My Tasks</h2>
                    <div className="bg-green-600 px-3 py-1 rounded-full text-xs">
                        Developer
                    </div>
                </div>

                {/* Task Type Toggle */}
                <div className="flex mb-6 bg-gray-900 rounded-full p-1">
                    <button
                        onClick={() => setActiveTab('current')}
                        className={`flex-1 py-2 rounded-full flex items-center justify-center ${
                            activeTab === 'current' 
                            ? 'bg-green-600 text-white' 
                            : 'text-gray-400 hover:bg-gray-800'
                        }`}
                    >
                        <ClockIcon className="w-5 h-5 mr-2" />
                        Current
                    </button>
                    <button
                        onClick={() => setActiveTab('completed')}
                        className={`flex-1 py-2 rounded-full flex items-center justify-center ${
                            activeTab === 'completed' 
                            ? 'bg-green-600 text-white' 
                            : 'text-gray-400 hover:bg-gray-800'
                        }`}
                    >
                        <CheckCircleIcon className="w-5 h-5 mr-2" />
                        Completed
                    </button>
                </div>

                {/* Task List */}
                <div className="space-y-4">
                    {(activeTab === 'current' ? currentTasks : completedTasks).map((task) => (
                        <motion.div
                            key={task.id}
                            onClick={() => setSelectedTask(task)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`p-4 rounded-lg border ${
                                selectedTask?.id === task.id 
                                ? 'border-green-500 bg-gray-900' 
                                : 'border-gray-700 hover:border-gray-600'
                            } cursor-pointer transition`}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="font-semibold text-lg">{task.title}</h3>
                                <div className="flex items-center">
                                    {getTaskStatusIcon(task.status)}
                                    <span className={`ml-2 text-xs px-2 py-1 rounded-full ${getTaskStatusColor(task.status)}`}>
                                        {task.status}
                                    </span>
                                </div>
                            </div>
                            <p className="text-gray-400 text-sm mt-2">
                                {task.description.length > 80 
                                    ? task.description.substring(0, 80) + '...' 
                                    : task.description}
                            </p>
                            <div className="flex items-center mt-3 text-xs text-gray-400">
                                <FolderIcon className="w-4 h-4 mr-1" />
                                <span>{task.project?.name || 'Unknown Project'}</span>
                            </div>
                            <div className="flex items-center justify-between mt-2 text-xs text-gray-400">
                                <span>Updated: {formatDate(task.updatedAt)}</span>
                            </div>
                        </motion.div>
                    ))}

                    {/* Empty state */}
                    {(activeTab === 'current' ? currentTasks : completedTasks).length === 0 && (
                        <div className="text-center py-10">
                            <div className="flex justify-center">
                                {activeTab === 'current' ? 
                                    <ListTodoIcon className="w-16 h-16 text-gray-600" /> : 
                                    <CheckCircleIcon className="w-16 h-16 text-gray-600" />
                                }
                            </div>
                            <h3 className="mt-4 text-gray-400">
                                {activeTab === 'current' ? 
                                    'No pending tasks at the moment' : 
                                    'No completed tasks yet'
                                }
                            </h3>
                        </div>
                    )}
                </div>
            </motion.div>

            {/* Task Details Section */}
            <motion.div 
                layout
                className="w-3/4 p-8 text-white"
            >
                {selectedTask ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="mb-8">
                            <div className="flex items-center mb-2">
                                <h1 className="text-3xl font-bold">{selectedTask.title}</h1>
                                <span className={`ml-4 px-3 py-1 rounded-full ${getTaskStatusColor(selectedTask.status)}`}>
                                    {selectedTask.status}
                                </span>
                            </div>
                            <div className="flex items-center text-gray-400 mb-4">
                                <FolderIcon className="w-4 h-4 mr-2" />
                                <span className="text-gray-400">{selectedTask.project?.name || 'Unknown Project'}</span>
                                <ChevronRightIcon className="w-4 h-4 mx-2" />
                                <span className="text-gray-300">Task #{selectedTask.id}</span>
                            </div>
                            <p className="text-gray-300">{selectedTask.description}</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                            <div className="lg:col-span-2">
                                <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 mb-6">
                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="text-lg font-semibold">Task Details</h3>
                                        {selectedTask.status !== 'DONE' && (
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => {
                                                    setIsUpdateStatusModalOpen(true);
                                                    setNewStatus(selectedTask.status);
                                                }}
                                                className="bg-green-600 text-white px-3 py-1 rounded-md flex items-center"
                                            >
                                                <CheckIcon className="w-4 h-4 mr-1" />
                                                Update Status
                                            </motion.button>
                                        )}
                                    </div>
                                    
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <h4 className="text-sm text-gray-400 mb-1">Project</h4>
                                                <p className="font-medium">{selectedTask.project?.name || 'Unknown Project'}</p>
                                            </div>
                                            <div>
                                                <h4 className="text-sm text-gray-400 mb-1">Status</h4>
                                                <div className="flex items-center">
                                                    {getTaskStatusIcon(selectedTask.status)}
                                                    <span className="ml-2">{selectedTask.status}</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <h4 className="text-sm text-gray-400 mb-1">Assigned Date</h4>
                                                <p className="font-medium">{formatDate(selectedTask.updatedAt)}</p>
                                            </div>
                                            <div>
                                                <h4 className="text-sm text-gray-400 mb-1">Last Updated</h4>
                                                <p className="font-medium">{formatDate(selectedTask.updatedAt)}</p>
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <h4 className="text-sm text-gray-400 mb-1">Description</h4>
                                            <p className="font-medium">{selectedTask.description}</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                                    <h3 className="text-lg font-semibold mb-4">Project Info</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="text-sm text-gray-400 mb-1">Project Description</h4>
                                            <p className="font-medium">{selectedTask.project?.description || 'No description available'}</p>
                                        </div>
                                        
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <h4 className="text-sm text-gray-400 mb-1">Story Points</h4>
                                                <p className="font-medium">{selectedTask.project?.storyPoints || 'N/A'}</p>
                                            </div>
                                            <div>
                                                <h4 className="text-sm text-gray-400 mb-1">Project Status</h4>
                                                <p className={`font-medium ${
                                                    selectedTask.project?.status === 'COMPLETED' ? 'text-green-400' :
                                                    selectedTask.project?.status === 'IN_PROGRESS' ? 'text-yellow-400' : 'text-gray-400'
                                                }`}>
                                                    {selectedTask.project?.status || 'Unknown'}
                                                </p>
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <h4 className="text-sm text-gray-400 mb-1">Team Leader</h4>
                                            <div className="flex items-center">
                                                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
                                                    <span className="text-white font-medium">
                                                        {(selectedTask.project?.teamLeader?.username || 'TL').charAt(0)}
                                                    </span>
                                                </div>
                                                <p className="font-medium">{selectedTask.project?.teamLeader?.username || 'Unknown'}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div>
                                <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 mb-6">
                                    <h3 className="text-lg font-semibold mb-4">Developer Info</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center">
                                            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mr-4">
                                                <span className="text-white text-2xl font-medium">
                                                    {userData.username.charAt(0)}
                                                </span>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-lg">{userData.username}</h4>
                                                <p className="text-gray-400">Developer</p>
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <h4 className="text-sm text-gray-400 mb-1">Last Login</h4>
                                            <p className="font-medium">{formatDate(userData.lastLogin)}</p>
                                        </div>
                                        
                                        <div>
                                            <h4 className="text-sm text-gray-400 mb-1">Tasks Overview</h4>
                                            <div className="grid grid-cols-3 gap-2 mt-2">
                                                <div className="bg-gray-800 p-3 rounded-lg text-center">
                                                    <div className="text-xl font-bold">{currentTasks.length}</div>
                                                    <div className="text-xs text-gray-400">Current</div>
                                                </div>
                                                <div className="bg-gray-800 p-3 rounded-lg text-center">
                                                    <div className="text-xl font-bold">{completedTasks.length}</div>
                                                    <div className="text-xs text-gray-400">Completed</div>
                                                </div>
                                                <div className="bg-gray-800 p-3 rounded-lg text-center">
                                                    <div className="text-xl font-bold">{currentTasks.length + completedTasks.length}</div>
                                                    <div className="text-xs text-gray-400">Total</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Quick Actions */}
                                <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                                    <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                                    <div className="space-y-2">
                                        {selectedTask.status !== 'DONE' && (
                                            <button 
                                                onClick={() => {
                                                    setNewStatus('DONE');
                                                    setIsUpdateStatusModalOpen(true);
                                                }}
                                                className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white rounded-md flex items-center justify-center"
                                            >
                                                <CheckCircleIcon className="w-5 h-5 mr-2" />
                                                Mark as Complete
                                            </button>
                                        )}
                                        
                                        {selectedTask.status !== 'IN_PROGRESS' && selectedTask.status !== 'DONE' && (
                                            <button 
                                                onClick={() => {
                                                    setNewStatus('IN_PROGRESS');
                                                    setIsUpdateStatusModalOpen(true);
                                                }}
                                                className="w-full py-2 px-4 bg-yellow-600 hover:bg-yellow-700 text-white rounded-md flex items-center justify-center"
                                            >
                                                <ClockIcon className="w-5 h-5 mr-2" />
                                                Start Working
                                            </button>
                                        )}
                                        
                                        {selectedTask.status === 'DONE' && (
                                            <button 
                                                onClick={() => {
                                                    setNewStatus('IN_PROGRESS');
                                                    setIsUpdateStatusModalOpen(true);
                                                }}
                                                className="w-full py-2 px-4 bg-gray-600 hover:bg-gray-700 text-white rounded-md flex items-center justify-center"
                                            >
                                                <ListTodoIcon className="w-5 h-5 mr-2" />
                                                Reopen Task
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Performance Chart */}
                        <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 text-white">
                            <h3 className="text-lg font-semibold mb-4">My Performance</h3>
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
                                        name="Story Points"
                                        type="monotone" 
                                        dataKey="storyPoints" 
                                        stroke="#10B981" 
                                        strokeWidth={3}
                                        dot={{ r: 6, fill: '#10B981', stroke: '#10B981' }}
                                        activeDot={{ r: 8, fill: '#10B981', stroke: 'white', strokeWidth: 2 }}
                                    />
                                    <Line 
                                        name="Completed Tasks"
                                        type="monotone" 
                                        dataKey="completedTasks" 
                                        stroke="#6366F1" 
                                        strokeWidth={3}
                                        dot={{ r: 6, fill: '#6366F1', stroke: '#6366F1' }}
                                        activeDot={{ r: 8, fill: '#6366F1', stroke: 'white', strokeWidth: 2 }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </motion.div>
                ) : (
                    <div className="h-full flex items-center justify-center text-gray-400">
                        Select a task to view details
                    </div>
                )}
            </motion.div>

            {/* Update Status Modal */}
            <AnimatePresence>
                {isUpdateStatusModalOpen && (
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
                                <h2 className="text-2xl font-bold text-white">Update Task Status</h2>
                                <motion.button
                                    whileHover={{ rotate: 90 }}
                                    onClick={() => setIsUpdateStatusModalOpen(false)}
                                    className="text-gray-400 hover:text-white"
                                >
                                    <XIcon className="w-6 h-6" />
                                </motion.button>
                            </div>

                            <div className="mb-6">
                                <h3 className="text-lg mb-2 text-white">{selectedTask?.title}</h3>
                                <p className="text-gray-400">{selectedTask?.description}</p>
                            </div>

                            <form className="space-y-4">
                                <div>
                                    <label className="block text-gray-400 mb-2">Status</label>
                                    <select
                                        value={newStatus}
                                        onChange={(e) => setNewStatus(e.target.value)}
                                        className="w-full bg-gray-800 text-white p-3 rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    >
                                        <option value="PENDING">Pending</option>
                                        <option value="IN_PROGRESS">In Progress</option>
                                        <option value="DONE">Done</option>
                                    </select>
                                </div>

                                <div className="flex justify-end space-x-4 mt-6">
                                    <motion.button
                                        type="button"
                                        onClick={() => setIsUpdateStatusModalOpen(false)}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
                                    >
                                        Cancel
                                    </motion.button>
                                    <motion.button
                                        type="button"
                                        onClick={handleUpdateTaskStatus}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-6 py-3 bg-green-600 text-white rounded-lg"
                                    >
                                        Update Status
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

export default Developer;