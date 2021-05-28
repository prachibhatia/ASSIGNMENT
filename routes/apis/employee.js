const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const app = express();

const cors = require('cors');

app.use(cors());


// create application/json parser
const jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const Employee = require('../../models/Employee')

router.post('/', jsonParser, cors(), async (req , res) => {

    let employee = new Employee();

    const { firstname, lastname , middlename , department , email, empid , contactno } = req.body;

    employee.firstname = firstname;
    employee.lastname = lastname;
    employee.middlename = middlename;
    employee.department = department;
    employee.email = email;
    employee.empid = empid;
    employee.contactno = contactno;

    employee.save().then(employees=>res.json(employees));
})

router.get('/',jsonParser,cors(),async(req,res)=>{
     Employee.find()
     .then(employee => 
        res.json(employee));
})



module.exports = router;