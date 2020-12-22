const Event = require("../models/event");

class EventController {
  static list(req, res, next) {
    Event.find().populate('location')
      .then((data) => {
        if (data == []){
          res.status(200).json({message : "Event still empty"})
        }else{
          res.status(200).json(data);
        }
        
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }

  static create(req, res, next) {
    const { name, location, startDate, endDate } = req.body;
    Event.findOne({name,startDate})
          .then((data) => {
            if (data){
              res.status(400).json({message: "location already have event at same day"})
              
            }else{
              return Event.create({ name, location, startDate, endDate })
            }
          })
    
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }

  static createTicket(req, res, next) {
    const { event, type, price, quota } = req.body;
    if (!event) {
      res.status(400).json({ message: "event id is missing" });
    } else {

      Event.findById(event)
        .then((data) => {
            if (!data){
                res.status(400).json({message: "Event not found"})
                return false
            }
          let error = false;
          data.tickets.map((ticket) => {
            if (ticket.type == type) {
              error = true;
            }
          });
          if (!error) {
            data.tickets.push({ type, price, quota });
            data.save();
            res.status(500).json({ info: "add ticket completed", data });
          } else {
            res.status(400).json({ message: `${type} ticket already exists` });
          }
        })
        .catch((err) => {
          res.status(500).json(err);
        });
    }
  }
}

module.exports = EventController;
