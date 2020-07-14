const Appointment = require("../models/appoint_model");
const Slot = require("../models/slot_model")
const { errorHandler } = require('../helpers/dbErrorHandler');







const appointmentController = {
  all(req, res) {
    
    
    Appointment.find({}).exec(
      
      (err, appointments) => {
        if(err) {
          return res.status(400).json({
            err: errorHandler(err)  
          })
      }
      res.json(appointments)
       
       
      })},
  create(req, res) {
    var requestBody = req.body;
    console.log(req.body)
    var newslot = new Slot({
      slot_time: requestBody.slot_time,
      slot_date: requestBody.slot_date,
      created_at: Date.now()
    });
    newslot.save(
      (err, sav) => {
        if(err) {
          console.log("rato")
          return res.status(400).json({
            err: errorHandler(err)  
          })
          
        }
      
          var newappointment = new Appointment({
            name: requestBody.name,
            email: requestBody.email,
            phone: requestBody.phone,
            slots: sav._id
          });

         
          newappointment.save((err, saved) => {
            
            if(err) {
              console.log("rato2")
              return res.status(400).json({
                err: err.message 
              }),
              newslot.remove()
              //console.log(newslot)
             
            }
            
            // Returns the saved appointment
            // after a successful save
            Appointment.find({ _id: saved._id })
              .populate("slots")
              .exec((err, appointment) => {
                
                if(err) {
                  return res.status(400).json({
                    err: errorHandler(err)  
                  })
              }
              res.json(appointment)
              
              
              })

         
        });
  
    });
  }
};

module.exports = appointmentController;


