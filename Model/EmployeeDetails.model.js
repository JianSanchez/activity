const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeDetailsSchema = new Schema ({
    firstName: { 
        type: String 
    },
    middleName: { 
        type: String 
    },
    lastName: { 
        type: String 
    },
    address: {
        type: String,
    },
    birthday: { 
        type: Date,
    },
    position: {
        type: String, 
    },
    dateCreated: { 
        type: Date, 
        default: Date.now 
    }
})

const EmployeeDetails = mongoose.model('Employee_Details', EmployeeDetailsSchema);
module.exports = EmployeeDetails;