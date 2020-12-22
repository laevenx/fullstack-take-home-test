const seeder = require('mongoose-seed')

const db = "mongodb://localhost:27017/data"

seeder.connect(db, function(){
    seeder.loadModels( [
        './models/event.js', './models/location.js', './models/purchase.js'
    ])
    seeder.clearModels(['Event','Location','Purchase'])
    seeder.populateModels(data, function (err,done) {
        if (err){
            return console.log('seed err',err)
        }else {
            return console.log('seed done', done)
        }
        seeder.disconnect()
    })
})


const data = [
    {
        'model': "Location",
        'documents': [
            {
                '_id': '1',
                'name': 'colorado'
            },
            {
                '_id': '2',
                'name': 'washington'
            }
        ]
    },
    {
        'model': "Event",
        'documents': [
            {
              "_id": "1",
              "name": "lucky show",
              "location" : "1",
              "ticket" : [
                  {
                      'name': 'standard',
                      'price' : 3000,
                      'quota' : 50
                  },
                  {
                    'name': 'lucky',
                    'price' : 6000,
                    'quota' : 10
                },
              ]
            },
            {
                "_id": "2",
                "name": "best show",
                "location" : "2",
                "ticket" : [
                    {
                        'type': 'standard',
                        'price' : 3000,
                        'quota' : 50
                    },
                    {
                      'type': 'VIP',
                      'price' : 6000,
                      'quota' : 25
                  },
                ]
              },
        ]
    },
    
]