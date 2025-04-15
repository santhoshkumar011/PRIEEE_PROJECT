const { forgotPassword } = require("../Auth/forgotPassword");
const { login } = require("../Auth/login");
const { resetPassword } = require("../Auth/resetPassword");


const router = new Router();

const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };


  router.post('/forgot-password', asyncHandler(async (req, res) => {
    await forgotPassword(req,res);
  }));

  router.post('/login', asyncHandler(async (req, res) => {
    await login(req,res);
  }));
  
  router.post('/reset-password', asyncHandler(async (req, res) => {
    await resetPassword(req,res);
  }));
 

  router.get("/",asyncHandler(async (req,res)=>{
    console.log("auth is working");
    res.status(200).send("HI IAM WORKING");
  }))
module.exports = {
    router
};