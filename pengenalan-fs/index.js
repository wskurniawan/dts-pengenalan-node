const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    if (err) {
      console.error(err)
      res.write('Terjadi kesalahan pada server')
      res.end()
      return
    }

    // kirim response
    res.write(data)
    res.end()
  })
}).listen(8000)

console.log('Server listen on port 8000')