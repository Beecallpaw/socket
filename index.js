var app = require('express')()
var http = require('http').createServer(app)
var io = require('socket.io')(http)

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))

io.on('connection', function(socket) {
    console.log('user connected')
    socket.on('message', function(msg){
        io.emit('message', msg)
        console.log('message:'+ msg)
    })
    socket.on('disconnect', function(){
        console.log('user disconnected')
    })
})

http.listen(3000, () => console.log('listening on port 3000'))
