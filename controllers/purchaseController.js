const Event = require("../models/event");
const Purchase = require("../models/purchase");

// const db = require("mongoose");
// const session = await db.startSession();

class PurchaseController {
  static list(req, res, next) {
    Purchase.find()
      .then((data) => {
          if (data == []){
            res.status(200).json({message : "Transaction still empty"})
          }else{
            res.status(200).json(data);
          }
        
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }

  static create(req, res, next) {
    const { name, event, tickets } = req.body;
    Event.findOne({ _id: event })
      .then(async (data) => {
        if (!data) {
          res.status(400).json({ message: "event not found" });
        }
        let error = false;
        let message = "";

        tickets.forEach( (userTicket) => {
          let check = false;
          data.tickets.forEach( (ticket) => {
            if (ticket.type == userTicket.type) {
              check = true;
              if (ticket.quota < userTicket.qty) {
                error = true;
                res
                  .status(400)
                  .json({ message: "quota is lower than quantity" });
              } else {
                ticket.quota = ticket.quota - userTicket.qty;
              }
            }else {
            }
          });
          if (!check) {
            error = true;
            res.status(400).json({ message: "invalid ticket type" });
              }
        });

        if (!error) {
          let wrong = false;
          await Purchase.findOne({ name, event }).then(async (data1) => {
            if (data1) {
              wrong = true;
              res.status(400).json({ message: `you already buy event ticket` });
              return false
            } else {
              console.log("pass");
              await data.save();
            }
          });
          if (!wrong) {
            return Purchase.create({ name, event, tickets });
          }
        } else {
          res.status(500).json({ message: "unknown error" });
        }
      })
      .then(async (data) => {
        res.status(201).json({ message: "purchase completed" });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }
}

module.exports = PurchaseController;
