const Location = require('../models/location')

class LocationController {


    static create(req,res,next){
        Location.findOne({name: req.body.name})
                .then((data) => {
                    if (data){
                        res.status(400).json({message: 'name already exists'})
                        
                    }else{
                        return Location.create({name: req.body.name})
                    }
                })
                .then((data) => {
                    res.status(200).json(data)
                })
                .catch((err) => {
                    res.status(500).json(err)
                })
    }
}

module.exports = LocationController