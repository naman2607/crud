const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("./config");
const EmployeeRoutes = require("./routes/employee");


const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api',EmployeeRoutes.routes);
app.get('/',(req,res)=>{
    res.send("hii")
})

const Port = process.env.PORT||3000;

console.log(Port)
app.listen(Port, ()=>console.log(`APP IS UP AND RUNNING AT ${Port}`));