'use strict'

var _ = require('lodash')
var Base = require('grenache-nodejs-base')
var Peer = require('./../lib/Peer')

var link = new Base.Link({
  grape: 'ws://127.0.0.1:30002'
})
link.start()

var client = new Peer(link, {})

var reqs = 50000
var reps = 0


setTimeout(() => {
  client.request(
    'coin.iota',
    { method: 'apiGetNodeInfo' },
    { timeout: 10000 },
    (err, data) => {
      console.log(err, data)
    }
  )
}, 1000)