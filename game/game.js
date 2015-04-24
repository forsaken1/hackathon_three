var Game = function(io) {
  this.io = io

  if (!(this instanceof Game)) {
    return new Game(io)
  }
}

Game.prototype.init_io = function() {
  var io = this.io
  io.on('connection', function(socket) {
    socket.on('disconnect', function() { })
    console.log('bod_logger: a user connected')
    io.emit('message', JSON.stringify({ message: 'test' }))
  })
}

Game.prototype.start = function() {
  this.init_io()
  console.log('bod_logger: game started')
}

module.exports = Game