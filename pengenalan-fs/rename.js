const fs = require('fs')

fs.rename('myText.txt', 'myText3.txt', function(err) {
  if (err) {
    return console.error(err)
  }

  console.log('Success')
})