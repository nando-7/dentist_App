const mongoose = require("mongoose")

//const model = mongoose.model;
const ObjectId = mongoose.Schema.Types.ObjectId;
  


const slotSchema = new mongoose.Schema({
    slot_time: {
      type: String,
      required: true
      },
    slot_date: {
      type: String,
      required: true
      },
    created_at: Date
  });

  slotSchema.index({ slot_time: 1, slot_date: 1}, { unique: true });

module.exports = mongoose.model('Slot', slotSchema);



// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         trim: true,
//         required: true,
//         maslength: 32
//     },

//     email: {
//         type: String,
//         trim: true,
//         required: true,
//         unique: 32
//     },

//     hashed_password: {
//         type: String,
//         required: true,
        
//     },

//     about: {
//         type: String,
//         trim: true,
        
//     },

//     salt: String,

//     role: {
//         type: Number,
//         default: 0
//     },

//     history: {
//         type: Array,
//         default: []
//     }


// }, {timestamps: true}

// );



//  module.exports = mongoose.model("User", userSchema);