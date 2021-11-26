const path = require('path')
const cors = require('cors')
const express = require('express')

const app = express()

const publicDir = path.join(__dirname, '.')

const PORT = 3000

app.use(cors())
app.use(express.static(publicDir))

// In the browser type: 'localhost:3000' to reach this endpoint
// Send HTML back in the response
app.get('/', (req, res) => {
    res.send("<h1>Hello, World!</h1><br>How are you?")
})

// In the browser type: 'localhost:3000/myendpoint' to reach this endpoint
// Send some JSON data back in the response
app.get('/michael/', (req, res) => {
    person = {
        name: "Michael",
        age: 21,
        hobbies: ["sleeping", "eating"]
    }
    res.send(JSON.stringify(person)) // JSON.stringify() converts an object into a JSON String
})

// Start the server on port 3000 and listen for incoming clients (=requests)
app.listen(3000, () => {
    console.log('Server up on port ' + PORT)
})