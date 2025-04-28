import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, BarChart3, Users, Briefcase, CheckCircle, Clock } from 'lucide-react';

const ProjectDashboard = ({ userData }) => {
  const [activeTab, setActiveTab] = useState('ONGOING');
  
  // Filter projects based on status
  const ongoingProjects = userData?.projects?.filter(project => 
    project.status === 'ONGOING' || project.status === 'NOT_STARTED') || [];
  
  const completedProjects = userData?.projects?.filter(project => 
    project.status === 'COMPLETED') || [];
  
  // Get projects based on active tab
  const displayProjects = activeTab === 'ONGOING' ? ongoingProjects : completedProjects;
  
  // Format date to be more readable
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    }).format(date);
  };

  return (
    <div className="min-h-screen w-full bg-[#040404] text-white">
      {/* Top navigation bar */}
      
      
      {/* Main content */}
      <div className="flex h-[calc(100vh-76px)] p-5">
        {/* Sidebar */}
        
        
        {/* Projects list */}
        <div className=''>

        
        <div className="flex-1 overflow-hidden flex flex-col">
          {/* Tab navigation */}
          <div className="border-b border-[#2a2a2a] flex justify-around">
            <motion.button
              className={`px-6 py-4 font-medium relative ${activeTab === 'ONGOING' ? 'text-white' : 'text-gray-400'}`}
              onClick={() => setActiveTab('ONGOING')}
            >
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                Ongoing Projects
              </div>
              {activeTab === 'ONGOING' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#fe4848]"
                  initial={false}
                />
              )}
            </motion.button>
            
            <motion.button
              className={`px-6 py-4 font-medium relative ${activeTab === 'COMPLETED' ? 'text-white' : 'text-gray-400'}`}
              onClick={() => setActiveTab('COMPLETED')}
            >
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2" />
                Completed Projects
              </div>
              {activeTab === 'COMPLETED' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#fe4848]"
                  initial={false}
                />
              )}
            </motion.button>
          </div>
          
          {/* Projects content with overflow */}
          <div className="flex-1 overflow-y-auto p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col space-y-5"
              >
                {displayProjects.length > 0 ? (
                  displayProjects.map(project => (
                    <motion.div
                      key={project.id}
                      whileHover={{ y: -5, boxShadow: '0 10px 15px -3px rgba(254, 72, 72, 0.1)' }}
                      className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6 cursor-pointer transition-all"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold">{project.name}</h3>
                        <div 
                          className={`text-xs font-medium px-3 py-1 rounded-full ${
                            project.status === 'NOT_STARTED' 
                              ? 'bg-blue-900/30 text-blue-400' 
                              : project.status === 'ONGOING' 
                                ? 'bg-amber-900/30 text-amber-400' 
                                : 'bg-green-900/30 text-green-400'
                          }`}
                        >
                          {project.status === 'NOT_STARTED' ? 'Not Started' : project.status}
                        </div>
                      </div>
                      
                      <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                        {project.description}
                      </p>
                      
                      <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center text-gray-400">
                          <BarChart3 className="w-4 h-4 mr-1" />
                          <span>{project.storyPoints} Points</span>
                        </div>
                        <div className="text-gray-400">
                          Created: {formatDate(project.createdAt)}
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-2 flex flex-col items-center justify-center text-center py-16">
                    <div className="bg-[#1a1a1a] rounded-full p-6 mb-4">
                      {activeTab === 'ONGOING' ? (
                        <Clock className="w-12 h-12 text-gray-500" />
                      ) : (
                        <CheckCircle className="w-12 h-12 text-gray-500" />
                      )}
                    </div>
                    <h3 className="text-xl font-medium">No {activeTab.toLowerCase()} projects</h3>
                    <p className="text-gray-400 mt-2">
                      {activeTab === 'ONGOING' 
                        ? "You don't have any ongoing projects at the moment." 
                        : "You haven't completed any projects yet."}
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDashboard;