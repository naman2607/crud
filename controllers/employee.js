const firebase = require("../db");
const Employee = require("../models/employee");
const firestore = firebase.firestore();



const addEmployee = async(req,res,next)=>{
    try {
        const data = req.body;
        await firestore.collection('employees').doc().set(data);
        res.send('Record Saved Successfully')
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllEmployees= async(req,res,next)=>{
    try {
        
        const employees = await firestore.collection('employees');
        const data = await employees.get();
        const employeesArray = [];
        if(data.empty){
            res.status(404).send("NO record found");
        }else{
            data.forEach(doc => {
               
                const employee = new Employee(
                    doc.id,
                    doc.data().firstName,
                    doc.data().lastName,
                    doc.data().phoneNumber
                );
                employeesArray.push(employee);
            });
            res.send(employeesArray);
        }

    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getEmployee = async(req,res,next)=>{

    try {
        
        const id = req.params.id;
        const employee = await firestore.collection('employees').doc(id);
        const data = await employee.get();
        if(!data.exists){
            res.status(404).send('employee not found');
        }
        else{
           
            res.send(data.data());
        }


    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateEmployee = async (req,res,next)=>{
    try {
        
        const id = req.params.id;
        const data = req.body;
        const employee = await firestore.collection('employees').doc(id);
        await employee.update(data);
        res.send("Data updated successfully")


    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteEmployee = async (req,res,next)=>{
    try {
        
        const id = req.params.id;
        await firestore.collection('employees').doc(id).delete();
        res.send("record deleted successfully")

    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports={
    addEmployee,
    getAllEmployees,
    getEmployee,
    updateEmployee,
    deleteEmployee
}