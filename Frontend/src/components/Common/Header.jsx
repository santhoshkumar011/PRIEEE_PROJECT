import { motion } from "framer-motion"

function Header({userData}){

    
    return(
        <div className="bg-[#0f0f0f] border-b border-[#2a2a2a] p-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <motion.svg 
              viewBox="0 0 24 24" 
              className="w-8 h-8 text-[#fe4848] fill-current"
              initial={{ rotate: -10 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.5 }}
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </motion.svg>
            <h2 className="text-xl font-bold ml-3 text-white">ProjectFlow</h2>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="font-semibold text-gray-300">{userData?.username || 'User'}</p>
              <p className="text-sm text-gray-400">{userData?.role === 'MG' ? 'Manager' : 'Team Member'}</p>
            </div>
            <div className="w-10 h-10 bg-[#fe4848] rounded-full flex items-center justify-center">
              <span className="font-bold text-white">{userData?.username?.charAt(0) || 'U'}</span>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Header