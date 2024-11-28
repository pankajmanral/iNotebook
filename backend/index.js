const connectMongoDB = require('./db')
connectMongoDB()

const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const port = 5000

app.use(express.json())

app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})