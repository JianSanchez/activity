const express = require('express');
const mongoose = require('mongoose');
const app = express();

const url ="mongodb://localhost:27017/admin";
const port="3000";

app.use(express.json());

// mongoose.connect('mongodb+srv://ustp:TrHPMmbKYAVtycon@informationsystem.gra6mxe.mongodb.net/?retryWrites=true&w=majority&appName=informationsystem')
//     user: '',
//     password: ''
// .then(() => {
//     console.log('Mongoose Connected...');
// })
// .catch((err) => {
//     console.log('Error connecting into MongoDB...', err);
// });

mongoose.connect(url,{})
.then(result => console.log('Database Connected'))
.catch(err => console.log(err));    

const CarCompanyInformationRoute = require('./Routes/CarCompanyInformation.route');
app.use(('/carcompany'), CarCompanyInformationRoute);

const CarDetails = require('./Routes/CarDetails.model');
app.use(('/cardetails'), CarDetails);

const EmployeeDetails = require('./Routes/EmployeeDetails.route');
app.use(('/employeedetails'), EmployeeDetails);

const Inventory = require('./Routes/Inventory.route');
app.use(('/inventory'), Inventory);

const OwnerDetails = require('./Routes/OwnerDetails.route');
app.use(('/ownerdetails'), OwnerDetails);

//Error for Wrong Endpoints
app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
})

// Middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error:{
            status: err.status || 500,
            message: err.message
        }
    })
});

app.listen(port,()=>{
    console.log('listening on port 3000');
});