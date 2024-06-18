import express from 'express'
const cors = require('cors')
const app = express()
const port = 3000
app.use(cors())

let tictactoegames = [{
  "game1": ["", "", "", "", "", "", "", "", ""],
  PlayerX: "",
  PlayerO: ""
}]


app.get('/', (_req, res) => {
  res.send("hello world")
})

// app.get('/tictactoe', (req, res) => {
//   if req.

// })

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})