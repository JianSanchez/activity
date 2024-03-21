const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarCompanySchema = new Schema ({
    carName: {
        type: String,
    },
    carFounder: {
        type: String,
    },
    dateFounded: { 
        type: Date, 
    },
    dateCreated: { 
        type: Date, 
        default: Date.now 
    }
});

const CarCompany = mongoose.model('CarCompany_Information', CarCompanySchema);
module.exports = CarCompany;