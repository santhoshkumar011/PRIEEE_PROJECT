const express = require('express');
const cors = require('cors');
const { router } = require('./router/router');


const app = express();
const port = process.env.PORT || 8080;

app.use(cors({
  origin:["http://localhost:5173", "http://localhost:5174"],
  credentials:true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/', router)

app.listen(port, () => {
  console.log(`Backend is running at http://localhost:${port}`);
})

app.post("/hi",(req,res)=>{
  res.status(200).json({
    hi:"hi"
  })
})

