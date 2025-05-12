import { useState } from 'react';
import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoginPage() {
  const [view, setView] = useState('login'); // 'login', 'forgotPassword', or 'otp'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);

  const handleForgotPassword = (e) => {
    e.preventDefault();
    setView('forgotPassword');
  };

  const handleSendOtp = (e) => {
    e.preventDefault();
    setView('otp');
  };

  const handleBackToLogin = () => {
    setView('login');
    setPassword('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (view === 'forgotPassword') {
      handleSendOtp(e);
    } else {
      // Handle regular login logic here
      console.log('Login submitted', { email, password, rememberPassword });
    }
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    // Handle OTP verification logic here
    console.log('OTP submitted', { email, otp });
  };

  // Updated Color palette - more vibrant and modern
  const colors = {
    primary: '#4F46E5', // indigo
    secondary: '#60A5FA', // blue
    accent: '#34D399', // emerald
    background: '#F9FAFB', // light gray
    text: '#111827', // dark gray
    error: '#EF4444', // red
    success: '#10B981', // green
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg flex overflow-hidden">
        {/* Left side - Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <div className="mb-8">
            <div className="flex items-center gap-2">
              <div className="bg-indigo-600 text-white p-1 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h1 className="text-xl font-bold text-gray-900">Landino</h1>
            </div>
          </div>

          {view === 'otp' ? (
            // OTP View
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -20 }}
              className="mt-12"
            >
              <h2 className="text-2xl font-bold text-center mb-4 text-gray-900">Verify Your Email</h2>
              <p className="text-center text-gray-500 mb-8">
                We've sent a verification code to<br />
                <span className="font-medium text-gray-700">{email || 'your email'}</span>
              </p>
              <form onSubmit={handleOtpSubmit}>
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Enter OTP</label>
                  <div className="flex gap-2 justify-center">
                    {[...Array(4)].map((_, index) => (
                      <input
                        key={index}
                        type="text"
                        maxLength="1"
                        className="w-14 h-14 text-center border border-gray-300 rounded-lg text-lg font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
                        required
                      />
                    ))}
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-md"
                >
                  Verify OTP
                </motion.button>
                <div className="text-center mt-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
                    onClick={handleBackToLogin}
                  >
                    Back to Login
                  </motion.button>
                </div>
                <div className="text-center mt-4 text-sm text-gray-500">
                  Didn't receive the code?{' '}
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-indigo-600 font-medium hover:text-indigo-800"
                  >
                    Resend
                  </motion.button>
                </div>
              </form>
            </motion.div>
          ) : (
            // Login View or Forgot Password View
            <div className="mt-12">
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold text-center mb-8 text-gray-900"
              >
                {view === 'forgotPassword' ? 'Reset Password' : 'Login'}
              </motion.h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                
                <AnimatePresence>
                  {view === 'login' && (
                    <motion.div 
                      initial={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mb-4 overflow-hidden"
                    >
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        </div>
                        <input
                          type="password"
                          className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required={view === 'login'}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <AnimatePresence>
                  {view === 'login' && (
                    <motion.div 
                      initial={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center justify-between mb-6 overflow-hidden"
                    >
                      <div className="flex items-center">
                        <input
                          id="remember"
                          type="checkbox"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                          checked={rememberPassword}
                          onChange={(e) => setRememberPassword(e.target.checked)}
                        />
                        <label htmlFor="remember" className="ml-2 block text-sm text-gray-500">
                          Remember Password
                        </label>
                      </div>
                      <button
                        type="button"
                        className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
                        onClick={handleForgotPassword}
                      >
                        Forgot Password?
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
                
                {view === 'forgotPassword' && (
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm text-gray-500 mb-6"
                  >
                    Enter your email address and we'll send you a one-time password to reset your account.
                  </motion.p>
                )}
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-md"
                >
                  {view === 'forgotPassword' ? 'Send OTP' : 'Login'}
                </motion.button>
                
                {view === 'forgotPassword' && (
                  <div className="text-center mt-6">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="button"
                      className="text-sm text-indigo-600 hover:text-indigo-800 font-medium"
                      onClick={handleBackToLogin}
                    >
                      Back to Login
                    </motion.button>
                  </div>
                )}
                
                
              </form>
              
              {view === 'login' && (
                <div className="mt-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="border-t border-gray-200 flex-grow mr-3"></div>
                    <span className="text-sm text-gray-500">Or Login With</span>
                    <div className="border-t border-gray-200 flex-grow ml-3"></div>
                  </div>
                  <div className="grid ">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex justify-center items-center py-2 px-4 border border-gray-200 rounded-lg hover:bg-gray-50 shadow-sm"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#FFC107"/>
                        <path d="M3.15302 7.3455L6.43851 9.755C7.32752 7.554 9.48052 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15902 2 4.82802 4.1685 3.15302 7.3455Z" fill="#FF3D00"/>
                        <path d="M12 22C14.583 22 16.93 21.0115 18.7045 19.404L15.6095 16.785C14.5718 17.5742 13.3038 18.001 12 18C9.39903 18 7.19053 16.3415 6.35853 14.027L3.09753 16.5395C4.75253 19.778 8.11353 22 12 22Z" fill="#4CAF50"/>
                        <path d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#1976D2"/>
                      </svg>
                    </motion.button>
                    {/* <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex justify-center items-center py-2 px-4 border border-gray-200 rounded-lg hover:bg-gray-50 shadow-sm"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#1DA1F2" d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.019 10.019 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex justify-center items-center py-2 px-4 border border-gray-200 rounded-lg hover:bg-gray-50 shadow-sm"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex justify-center items-center py-2 px-4 border border-gray-200 rounded-lg hover:bg-gray-50 shadow-sm"
                    > */}
                      {/* <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="11" fill="white" stroke="#E0E0E0" strokeWidth="2"/>
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="white"/>
                        <path d="M17.4182 12.0297C17.4182 11.6695 17.3842 11.3242 17.3105 10.9938H12.1V13.0789H15.1545C15.0141 13.8289 14.5673 14.452 13.8638 14.8586V16.1953H15.7045C16.8573 15.1242 17.4182 13.7148 17.4182 12.0297Z" fill="#4285F4"/>
                        <path d="M12.1 17.2727C13.6673 17.2727 14.9564 16.7773 15.7046 16.1953L13.8638 14.8586C13.2995 15.2335 12.5764 15.4572 12.1 15.4572C10.6682 15.4572 9.4573 14.4863 9.06523 13.1719H7.15909V14.552C7.90455 16.1812 9.85 17.2727 12.1 17.2727Z" fill="#34A853"/>
                        <path d="M9.06523 13.1719C8.94205 12.7969 8.87386 12.4034 8.87386 12C8.87386 11.5966 8.94205 11.2031 9.06523 10.8281V9.44792H7.15909C6.75682 10.2292 6.51818 11.0959 6.51818 12C6.51818 12.9041 6.75682 13.7708 7.15909 14.552L9.06523 13.1719Z" fill="#FBBC05"/>
                        <path d="M12.1 8.54276C13.0041 8.54276 13.8105 8.84886 14.4486 9.45455L16.0768 7.82642C14.9564 6.76903 13.6673 6.22729 12.1 6.22729C9.85 6.22729 7.90455 7.31879 7.15909 8.94801L9.06523 10.3281C9.4573 9.01367 10.6682 8.54276 12.1 8.54276Z" fill="#EA4335"/>
                      </svg>
                    </motion.button> */}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        
        {/* Right side - Image */}
        <div className="hidden md:block md:w-1/2 bg-gradient-to-br from-indigo-100 to-blue-50">
          <DotLottieReact
            src="https://lottie.host/803e49f2-0b47-4ad7-b660-12a5c42eb5d2/GEvpS6lZt4.lottie"
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  );
}