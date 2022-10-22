require('dotenv').config()
const express = require('express')


// Express app
const app = express()

// ---Middleware---

// Any request sent to the server, it attaches it and patches it to the request object
app.use(express.json())

// Logs all of the requests being sent to the server.
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
// This code below handles how our server responds to certain requests

// Register all requests under this path
app.use('/api/workouts', workoutRoutes)

process.env