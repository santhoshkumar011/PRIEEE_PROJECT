import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import "../main.scss"

const LoginPage = () => {
  const [mode, setMode] = useState('login'); // 'login' or 'forgotPassword'
  const [otpSent, setOtpSent] = useState(false);
  const [timer, setTimer] = useState(60);
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  
  // Handle timer for OTP
  useEffect(() => {
    let interval;
    if (otpSent && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [otpSent, timer]);

  // Handle OTP input change
  const handleOtpChange = (index, value) => {
    if (isNaN(value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    
    // Move to next input
    if (value !== '' && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  // Handle OTP keydown for backspace
  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  // Format timer
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#3c3c3c]" style={{ 
      background: 'linear-gradient(135deg, #2a2a2a  0%, #040404 100%)'
    }}>
      {/* Main content container */}
      <div className="w-full h-screen flex">
        {/* Left side content */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="hidden lg:flex lg:w-1/2 p-16 flex-col justify-between text-white"
        >
          <div>
            <motion.div 
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <svg viewBox="0 0 24 24" className="w-10 h-10 text-[#fe4848] fill-current">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <h2 className="text-2xl font-bold ml-3 text-white">ProjectFlow</h2>
            </motion.div>
            
            <p className="mt-6 text-gray-400 font-light">Your complete project management solution with powerful tools and real-time insights.</p>
            
            <div className="mt-12">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex items-center mb-8"
              >
                <div className="bg-[#fe4848] rounded-full p-3 mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Invite unlimited colleagues</h3>
                  <p className="text-gray-400 text-sm mt-1">Integrate with guaranteed developer-friendly APIs</p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex items-center mb-8"
              >
                <div className="bg-[#fe4848] rounded-full p-3 mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Ensure compliance</h3>
                  <p className="text-gray-400 text-sm mt-1">Receive detailed insights in real-time</p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex items-center"
              >
                <div className="bg-[#fe4848] rounded-full p-3 mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Built-in security</h3>
                  <p className="text-gray-400 text-sm mt-1">Keep your team members and customers secure</p>
                </div>
              </motion.div>
            </div>
          </div>
          
          <div className="mt-12 flex space-x-4 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-400">Terms</a>
            <a href="#" className="hover:text-gray-400">Privacy</a>
            <a href="#" className="hover:text-gray-400">Docs</a>
            <a href="#" className="hover:text-gray-400">Help</a>
          </div>
        </motion.div>
        
        {/* Right side form */}
        <motion.div 
          layout
          className=" p-8 md:p-16 w-full lg:w-1/2 text-white flex items-center justify-center"
          
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md border-2 border-[#514d4d] rounded-4xl p-8"
          >
            
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2 text-gray-300" htmlFor="email">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  id="email"
                  type="email"
                  className="w-full bg-[#2a2a2a] border border-[#514d4d] rounded-md pl-10 p-3 focus:ring-2 focus:ring-[#514d4d] focus:border-transparent outline-none transition placeholder-gray-400 text-gray-400"
                  placeholder="e.g abc@gmail.com"
                />
              </div>
            </div>
            
            <AnimatePresence mode="wait">
              {mode === 'login' && (
                <motion.div
                  key="password"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-6"
                >
                  <label className="block text-sm font-medium mb-2 text-gray-300" htmlFor="password">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <input
                      id="password"
                      type="password"
                      className="w-full bg-[#2a2a2a] border border-[#514d4d] rounded-md pl-10 p-3 focus:ring-2 focus:ring-[#514d4d] focus:border-transparent outline-none transition placeholder-gray-400 text-gray-400"
                      placeholder="Enter your password"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <svg className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Minimum length is 8 characters</p>
                </motion.div>
              )}
            </AnimatePresence>
            
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  className="w-4 h-4 bg-gray-700 border-gray-600 rounded focus:ring-[#fe4848] accent-[#fe4848]"
                />
                <label htmlFor="remember" className="ml-2 text-sm text-gray-400">
                  Remember me
                </label>
              </div>
              <button
                onClick={() => {
                  setMode(mode === 'login' ? 'forgotPassword' : 'login');
                  setOtpSent(false);
                }}
                className="text-sm text-[#ff8282] basic-1"
              >
                {mode === 'login' ? 'Forgot password?' : 'Remember password?'}
              </button>
            </div>
            
            <motion.button
              layout
              onClick={() => {
                if (mode === 'forgotPassword' && !otpSent) {
                  setOtpSent(true);
                  setTimer(60);
                }
              }}
              className="w-full bg-[#ff5252] hover:bg-[#ff3d3d] text-gray-300 font-medium py-3 px-4 rounded-md transition focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {mode === 'login' ? 'Login' : (otpSent ? 'Verify OTP' : 'Send OTP')}
            </motion.button>
            
            <div className="mt-6 text-center text-sm text-gray-400">
              <p>
                By creating an account, you agree to the 
                <a href="#" className="text-yellow-400 hover:text-yellow-300 ml-1">Terms of Service</a>.
                We'll occasionally send you account-related emails.
              </p>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-gray-400 text-sm">
                Already have an account? 
                <a href="#" className="text-yellow-400 hover:text-yellow-300 ml-1">
                  Login
                </a>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* OTP Overlay */}
      <AnimatePresence>
        {otpSent && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-10 flex items-center justify-center bg-gray-900/70"
            onClick={(e) => e.target === e.currentTarget && setOtpSent(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-gray-800 rounded-md p-8 max-w-md w-full mx-4 shadow-2xl border border-gray-700"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">Verify Your Identity</h3>
                <button 
                  onClick={() => setOtpSent(false)} 
                  className="text-gray-400 hover:text-white"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              
              <p className="text-gray-300 mb-6">
                We've sent a verification code to your email address. Enter the 6-digit code below.
              </p>
              
              <div className="mb-6">
                <label className="block text-sm font-medium mb-4 text-gray-300">
                  Enter OTP
                </label>
                <div className="flex justify-between mb-4">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      maxLength="1"
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(index, e)}
                      className="w-12 h-12 text-center bg-gray-700 border border-gray-600 rounded-md text-white text-xl font-medium focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition"
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-400 flex justify-between items-center">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-1 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span>Expires in {formatTime(timer)}</span>
                  </div>
                  <button 
                    className={`text-yellow-400 hover:text-yellow-300 ${timer === 0 ? '' : 'opacity-50 cursor-not-allowed'}`}
                    disabled={timer > 0}
                  >
                    Resend OTP
                  </button>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-3 px-4 rounded-md transition focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
              >
                Verify OTP
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoginPage;