const express = require('express')
const app = express()

console.dir(app)

app.listen(3000, () => {
  console.log("Listening on port 3000")
})

app.use(() => {
  console.log('We Gots a new request')
})

// app.get('/', (req, res) => {
//   res.send('Welcome to the home page!')
// })