const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OwnerDetailsSchema = new Schema ({
    carName: {
        type: String,
    },
    carSerialNumber: {
        type: Number, 
    },
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
    dateCreated: { 
        type: Date, 
        default: Date.now 
    }
})

const OwnerDetails = mongoose.model('Owner_Details', OwnerDetailsSchema);
module.exports = OwnerDetails;