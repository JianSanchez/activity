const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarDetailsSchema = new Schema ({
    carBrand: {
        type: String,
    },
    carName: {
        type: String,
    },
    carSerialNumber: {
        type: Number, 
    },
    quantity: {
        type: Number, 
    },
    dateCreated: { 
        type: Date, 
        default: Date.now 
    }
})

const CarDetails = mongoose.model('Car_Details', CarDetailsSchema);
module.exports = CarDetails;