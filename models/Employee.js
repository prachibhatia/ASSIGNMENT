let mongoose = require('mongoose');

// User Schema
const EmployeeSchema = mongoose.Schema({
    firstname: {
      type: String,
      required: true
    },
    middlename: {
      type: String
    },
    lastname:{
        type :String,
        required: true
    },
    department:{
        type :String,
        required: true 
    },
    email:{
        type :String,
        required: true 
    },
    empid:{
        type :String,
        required: true 
    },
    contactno:{
        type :String,
        required: true 
    }
  });

module.exports = Employee = mongoose.model('employee', EmployeeSchema);