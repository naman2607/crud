const express = require('express');
const {addEmployee ,getAllEmployees,getEmployee,updateEmployee,deleteEmployee}  = require('../controllers/employee');

const router = express.Router();

router.post('/employee',addEmployee);
router.get('/employees',getAllEmployees);
router.get('/employee/:id',getEmployee);
router.put('/employee/:id',updateEmployee);
router.delete('/employee/:id',deleteEmployee);

module.exports={
    routes:router
}