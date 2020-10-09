const http = require('http')
const moment = require('moment')

const server = http.createServer((req, res) => {
  const currentDate = moment().format('LLLL')
  res.end(currentDate)
})

server.listen(8000)
console.log('server listen on port 8000')