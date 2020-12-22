const seeder = require('mongoose-seed')

const db = "mongodb://localhost:27017/data"


seeder.connect(db, function(){
    seeder.loadModels( [
        './models/event.js', './models/location.js', './models/purchase.js'
    ])
    seeder.clearModels(['Event','Location','Purchase'], function(){
        seeder.populateModels(data, function () {
            console.log("seeding completed")
            seeder.disconnect()
        })
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
              "startDate" : "2020-12-25",
                "endDate" : "2020-12-26",
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
                "startDate" : "2020-12-25",
                "endDate" : "2020-12-26",
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