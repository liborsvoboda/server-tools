import { WebSocketServer } from 'ws'

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function (ws, req) {
  console.log(JSON.stringify({
    'ws socket address method': ws._socket.address(),
    'ws socket remote port': ws._socket.remotePort,
    'ws socket remote address': ws._socket.remoteAddress,
    'req socket remote address': req.socket.remoteAddress,
    'req connection remote address': req.connection.remoteAddress,
    'x-forwarded-for': req.headers['x-forwarded-for'] || null,
    'x-real-ip': req.headers['x-real-ip'] || null,
    'headers': req.headers
  }, null, 2))
})

console.log('starting')
