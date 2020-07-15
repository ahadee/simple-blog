const express = require('express')
const mongoose = require('mongoose')
const app = express()
const bodyParser = require('body-parser')
// const DATABASE_LOCAL = 'mongodb://localhost/rest'
require('dotenv/config')

app.use(bodyParser.json())

const postRoute = require('./routes/posts')

app.use('/posts',postRoute)


//ROUTES
app.get('/', (req, res) => {
    res.send('We are on home')
})



/*app.get('/posts', (req, res) => {
    res.send('We are on posts')
})*/

//Connect to DB
mongoose
    .connect(process.env.DB_CONNECTION,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        () => { console.log('connected to DB!') }
    )


//listen to server
app.listen(3000)