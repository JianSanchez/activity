const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InventorySchema = new Schema ({
    brandName: {
        type: String,
    },
    quantity: {
        type: Number, 
    },
    dateCreated: { 
        type: Date, 
        default: Date.now 
    }
})

const Inventory = mongoose.model('Inventory', InventorySchema);
module.exports = Inventory;