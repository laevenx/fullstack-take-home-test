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
                '_id': '5f3a5907-bde4-4af5-959f-65ade6d364cd',
                'name': 'colorado'
            },
            {
                '_id': 'b7166ccb-5b7f-4652-9896-df6d9b86ad45',
                'name': 'washington'
            }
        ]
    },
    {
        'model': "Event",
        'documents': [
            {
              "_id": "86551c31-792a-40df-860d-79cf16a8f912",
              "name": "lucky show",
              "location" : "5f3a5907-bde4-4af5-959f-65ade6d364cd",
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
                "_id": "4080a719-a1d7-4228-8cfb-bedc52a10bcd",
                "name": "best show",
                "location" : "b7166ccb-5b7f-4652-9896-df6d9b86ad45",
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