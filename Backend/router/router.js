const { forgotPassword } = require("../Auth/forgotPassword");
const { login } = require("../Auth/login");
const { verifyOTPforLogin } = require("../Auth/otpVerify");
const { resetPassword } = require("../Auth/resetPassword");
const { Router } = require("express");
const { homePage } = require("../PageLoader/Home/homePage");
const { addProject } = require("../Project/addProject");
const { addTask } = require("../Project/addTask");



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

  router.post('/verify-otp', asyncHandler(async (req, res) => {
    await verifyOTPforLogin(req,res);
  }));

  router.post('/add-project', asyncHandler(async (req, res) => {
    await addProject(req,res)
  }));

  router.post('/add-task', asyncHandler(async (req, res) => {
    await addTask(req,res)
  }));

  router.post('/home', asyncHandler(async (req, res) => {
    await homePage(req,res);
  }));
 

  router.get("/",asyncHandler(async (req,res)=>{
    console.log("auth is working");
    res.status(200).send("HI IAM WORKING");
  }))
module.exports = {
    router
};