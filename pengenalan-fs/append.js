const fs = require('fs')

fs.appendFile('myText.txt', 'Hello world', function() {
  console.log('Berhasil menulis file.')
})