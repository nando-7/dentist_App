const mongoose = require("mongoose")

//const model = mongoose.model;
const ObjectId = mongoose.Schema.Types.ObjectId;
  




const appointmentSchema = new mongoose.Schema({
  id: ObjectId,
  name: { type: String, required: true},
  email: {
        type: String,
        trim: true,
        required: true
           
        },
  phone: Number,
  slots:{type: ObjectId, ref: 'Slot'}
  
}, {timestamps: true} );

module.exports = mongoose.model('Appointment', appointmentSchema);
