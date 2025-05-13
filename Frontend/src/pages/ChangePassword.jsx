import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, Toaster } from "sonner";

export default function ResetPasswordModal({ onClose, onReset }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const {uname} = useParams()
  const nav =  useNavigate()
  

  async function handleReset() {
    
  
    if (password !== confirmPassword) {
      
            toast.error("Passwords does not match ",{
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
    }
    else{
        let status = false
            const dummy =  await new Promise ((resolve)=>{

        toast.promise(new Promise((resolve,reject)=>{
                fetch("http://localhost:8080/reset-password", {
                  method: "POST",
                  body: JSON.stringify({ uname:uname , password: password }),
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
                loading: "Changing your password ...",
                success: (data)=>{
                  status = true
                  resolve()
                  return (`OTP sent successfully.. !!`)
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
              })})
              if(status){
              nav(`/${uname}`)
            } 
            }

            
    }


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-10 flex items-center justify-center bg-[#242222] backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        className="bg-[#1a1a1a] rounded-3xl p-8 max-w-md w-full mx-4 shadow-2xl border border-[#514d4d]"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-white">Reset Your Password</h3>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </motion.button>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2 text-gray-300">
            New Password
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 bg-[#2a2a2a] border border-[#514d4d] rounded-md text-white focus:ring-2 focus:ring-[#fe4848] outline-none transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2 text-gray-300">
            Re-enter Password
          </label>
          <input
            type="password"
            className="w-full px-3 py-2 mb-5 bg-[#2a2a2a] border border-[#514d4d] rounded-md text-white focus:ring-2 focus:ring-[#fe4848] outline-none transition"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {error && (
          <p className="text-sm text-red-500 mb-4 font-medium">{error}</p>
        )}

        <motion.button
          whileHover={{ scale: 1.02, backgroundColor: "#ff2020" }}
          whileTap={{ scale: 0.98 }}
          onClick={handleReset}
          className="w-full bg-[#ff3d3d] hover:bg-[#ff2f2f] text-white font-medium py-2 px-3 rounded-md transition focus:outline-none focus:ring-2 focus:ring-[#fe4848] focus:ring-opacity-50"
        >
          Confirm Reset
        </motion.button>
      </motion.div>
      <Toaster position="bottom-right"/>
    </motion.div>
  );
}
