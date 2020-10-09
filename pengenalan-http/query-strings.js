const http = require('http')
const url = require('url')

const server = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  const query = url.parse(req.url, true).query
  const response = 'Keyword: ' + query.keyword
  res.write(response)
  res.end()
})

server.listen(8000)
console.log('server running at port 8000')