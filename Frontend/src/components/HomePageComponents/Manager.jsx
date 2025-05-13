import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { PlusIcon, FolderOpenIcon, CheckCircleIcon, XIcon } from 'lucide-react';

const Manager = () => {
    const [activeProjectType, setActiveProjectType] = useState('current');
    const [selectedProject, setSelectedProject] = useState(null);
    const [isAddProjectModalOpen, setIsAddProjectModalOpen] = useState(false);
    const [newProject, setNewProject] = useState({
        name: '',
        description: '',
        storyPoints: '',
        manager: '',
        teamLeader: '',
        tasks: []
    });

    // Sample project data
    const [currentProjects, setCurrentProjects] = useState([
        { 
            id: 1, 
            name: 'E-commerce Platform', 
            description: 'A comprehensive online shopping solution with advanced features',
            storyPoints: 120,
            status: 'IN_PROGRESS',
            manager: 'Sarah Thompson',
            teamLeader: 'Michael Chen',
            tasks: [
                { title: 'User Authentication', status: 'IN_PROGRESS' },
                { title: 'Payment Integration', status: 'PENDING' },
                { title: 'Product Catalog', status: 'COMPLETED' }
            ]
        },
        { 
            id: 2, 
            name: 'Healthcare Management System', 
            description: 'Integrated platform for patient records and medical tracking',
            storyPoints: 85,
            status: 'IN_PROGRESS',
            manager: 'Dr. Emily Rodriguez',
            teamLeader: 'David Kim',
            tasks: [
                { title: 'Database Design', status: 'COMPLETED' },
                { title: 'Patient Portal', status: 'IN_PROGRESS' },
                { title: 'Reporting Module', status: 'PENDING' }
            ]
        }
    ]);

    const [completedProjects, setCompletedProjects] = useState([
        { 
            id: 3, 
            name: 'Social Media Analytics Tool', 
            description: 'Advanced analytics platform for social media insights',
            storyPoints: 200,
            status: 'COMPLETED',
            manager: 'Alex Johnson',
            teamLeader: 'Rachel Green',
            tasks: [
                { title: 'Data Collection', status: 'COMPLETED' },
                { title: 'Visualization', status: 'COMPLETED' },
                { title: 'Reporting', status: 'COMPLETED' }
            ]
        }
    ]);

    // Updated performance data with cumulative and per-sprint views
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

    const handleAddProject = () => {
        // Validate project fields
        if (!newProject.name || !newProject.description || !newProject.storyPoints || 
            !newProject.manager || !newProject.teamLeader) {
            alert('Please fill in all project details');
            return;
        }

        // Create new project object
        const projectToAdd = {
            ...newProject,
            id: currentProjects.length + 1,
            status: 'IN_PROGRESS',
            tasks: newProject.tasks.length > 0 
                ? newProject.tasks.split(',').map(task => ({ 
                    title: task.trim(), 
                    status: 'PENDING' 
                })) 
                : []
        };

        // Add to current projects
        setCurrentProjects([...currentProjects, projectToAdd]);

        // Reset form and close modal
        setNewProject({
            name: '',
            description: '',
            storyPoints: '',
            manager: '',
            teamLeader: '',
            tasks: []
        });
        setIsAddProjectModalOpen(false);
    };

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;
            return (
                <div className="bg-[#2a2a2a] p-4 border border-[#514d4d] rounded-md shadow-lg">
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

    return (
        <div className="min-h-screen w-full flex" style={{ 
            background: 'linear-gradient(135deg, #2a2a2a 0%, #040404 100%)'
        }}>
            {/* Sidebar for Projects */}
            <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="w-1/4 p-8 border-r border-[#514d4d] text-white"
            >
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Projects</h2>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-[#fe4848] p-2 rounded-full"
                        onClick={() => setIsAddProjectModalOpen(true)}
                    >
                        <PlusIcon className="w-6 h-6" />
                    </motion.button>
                </div>

                {/* Project Type Toggle */}
                <div className="flex mb-6 bg-[#1a1a1a] rounded-full p-1">
                    <button
                        onClick={() => setActiveProjectType('current')}
                        className={`flex-1 py-2 rounded-full flex items-center justify-center ${
                            activeProjectType === 'current' 
                            ? 'bg-[#fe4848] text-white' 
                            : 'text-gray-400 hover:bg-[#2a2a2a]'
                        }`}
                    >
                        <FolderOpenIcon className="w-5 h-5 mr-2" />
                        Current
                    </button>
                    <button
                        onClick={() => setActiveProjectType('completed')}
                        className={`flex-1 py-2 rounded-full flex items-center justify-center ${
                            activeProjectType === 'completed' 
                            ? 'bg-[#fe4848] text-white' 
                            : 'text-gray-400 hover:bg-[#2a2a2a]'
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
                                ? 'border-[#fe4848] bg-[#1a1a1a]' 
                                : 'border-[#514d4d] hover:border-gray-600'
                            } cursor-pointer transition`}
                        >
                            <div className="flex justify-between items-center">
                                <h3 className="font-semibold text-lg">{project.name}</h3>
                                <span className={`text-xs px-2 py-1 rounded-full ${
                                    project.status === 'IN_PROGRESS' 
                                    ? ' text-yellow-400' 
                                    : ' text-green-400'
                                }`}>
                                    {project.status.replace('_', ' ')}
                                </span>
                            </div>
                            <p className="text-gray-400 text-sm mt-2">{project.description}</p>
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
                            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#514d4d]">
                                <h3 className="text-lg font-semibold mb-4">Project Details</h3>
                                <div className="space-y-2">
                                    <p>
                                        <span className="text-gray-400">Story Points:</span>{' '}
                                        <span className="font-medium">{selectedProject.storyPoints}</span>
                                    </p>
                                    <p>
                                        <span className="text-gray-400">Status:</span>{' '}
                                        <span className="font-medium">{selectedProject.status.replace('_', ' ')}</span>
                                    </p>
                                    <p>
                                        <span className="text-gray-400">Manager:</span>{' '}
                                        <span className="font-medium">{selectedProject.manager}</span>
                                    </p>
                                    <p>
                                        <span className="text-gray-400">Team Leader:</span>{' '}
                                        <span className="font-medium">{selectedProject.teamLeader}</span>
                                    </p>
                                </div>
                            </div>

                            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#514d4d]">
                                <h3 className="text-lg font-semibold mb-4">Tasks</h3>
                                <div className="space-y-2">
                                    {selectedProject.tasks.map((task, index) => (
                                        <div key={index} className="flex items-center justify-between">
                                            <span>{task.title}</span>
                                            <span className={`text-xs px-2 py-1 rounded-full ${
                                                task.status === 'COMPLETED' 
                                                ? 'bg-green-600/20 text-green-400' 
                                                : task.status === 'IN_PROGRESS'
                                                ? 'bg-yellow-600/20 text-yellow-400'
                                                : 'bg-gray-600/20 text-gray-400'
                                            }`}>
                                                {task.status}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#514d4d]">
                                <h3 className="text-lg font-semibold mb-4">Create New Project</h3>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full bg-[#fe4848] text-white py-3 rounded-lg flex items-center justify-center"
                                    onClick={() => setIsAddProjectModalOpen(true)}
                                >
                                    <PlusIcon className="w-5 h-5 mr-2" />
                                    New Project
                                </motion.button>
                            </div>
                        </div>

                        <div className="bg-[#1a1a1a] p-6 rounded-lg border border-[#514d4d] text-white">
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
                            className="bg-[#1a1a1a] rounded-lg p-8 w-full max-w-2xl border border-[#514d4d]"
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
                                        className="w-full bg-[#2a2a2a] text-white p-3 rounded-lg border border-[#514d4d] focus:outline-none focus:ring-2 focus:ring-[#fe4848]"
                                        placeholder="Enter project name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-400 mb-2">Description</label>
                                    <textarea 
                                        value={newProject.description}
                                        onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                                        className="w-full bg-[#2a2a2a] text-white p-3 rounded-lg border border-[#514d4d] focus:outline-none focus:ring-2 focus:ring-[#fe4848] h-24"
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
                                            className="w-full bg-[#2a2a2a] text-white p-3 rounded-lg border border-[#514d4d] focus:outline-none focus:ring-2 focus:ring-[#fe4848]"
                                            placeholder="Enter story points"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-400 mb-2">Tasks (comma-separated)</label>
                                        <input 
                                            type="text"
                                            value={newProject.tasks}
                                            onChange={(e) => setNewProject({...newProject, tasks: e.target.value})}
                                            className="w-full bg-[#2a2a2a] text-white p-3 rounded-lg border border-[#514d4d] focus:outline-none focus:ring-2 focus:ring-[#fe4848]"
                                            placeholder="Task 1, Task 2, Task 3"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-400 mb-2">Project Manager</label>
                                        <input 
                                            type="text"
                                            value={newProject.manager}
                                            onChange={(e) => setNewProject({...newProject, manager: e.target.value})}
                                            className="w-full bg-[#2a2a2a] text-white p-3 rounded-lg border border-[#514d4d] focus:outline-none focus:ring-2 focus:ring-[#fe4848]"
                                            placeholder="Enter project manager"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-400 mb-2">Team Leader</label>
                                        <input 
                                            type="text"
                                            value={newProject.teamLeader}
                                            onChange={(e) => setNewProject({...newProject, teamLeader: e.target.value})}
                                            className="w-full bg-[#2a2a2a] text-white p-3 rounded-lg border border-[#514d4d] focus:outline-none focus:ring-2 focus:ring-[#fe4848]"
                                            placeholder="Enter team leader"
                                        />
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
                                        className="px-6 py-3 bg-[#fe4848] text-white rounded-lg"
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