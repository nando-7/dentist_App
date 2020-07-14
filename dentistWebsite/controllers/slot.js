const  Slot  = require("../models/slot_model");

exports.slotController = {
  all (req, res) {
    // Returns all Slots
      Slot.find({})
          .exec((err, slots) => res.json(slots))
  }
};

//module.exports = slotController;


exports.list = (req, res) => {
  let order = req.query.order ? req.query.order : 'asc';
  let sortBy = req.query.sortBy ? req.query.sortBy : 'slot_date';
  //let limit = req.query.limit ? parseInt(req.query.limit) : 8;
  
  Slot.find({ slot_date: req.params.slot_date })
      .select('slot_time')
      
      .sort([[sortBy, order]])
      //.limit(limit)
      .exec((err, slots) => {
          if (err) {
              return res.status(400).json({
                  error: 'Slots not found'
              });
          }
          res.json(slots);
      });
};

//module.exports = list;