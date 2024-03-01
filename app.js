const express = require('express');
const app = express();
const port = 8000;

// db connection
const dbConnection = require('./db/dbConfig')

// user routes middleware file
const userRoutes = require('./routes/userRoute')

// user routes middleware file
const questionsRoutes = require('./routes/questionroute')

// json middleware to extract json data
app.use(express.json())

// user routes middleware
app.use ('/api/users', userRoutes)

// questions routes middleware??
    app.use("/api/questions", questionsRoutes)

// answer routes middleware??

async function start() {
try{
    const result = await dbConnection.execute("select 'test' ")
    app.listen(port)
    console.log('database connection established')
    console.log(`listening on ${port}`)
        }catch (Error) {
    console.log(error.message)
    }
}

start()




