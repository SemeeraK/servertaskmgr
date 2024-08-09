const express = require('express')
const app = express()
require('dotenv').config();
const cors=require('cors')
require('./Models/db')
const TaskRouter = require('./Routes/TaskRouter');
const bodyParser = require('body-parser');
const PORT = process.env.port || 8000
app.get('/',(req,res)=>{
    res.send('hello server')
})
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use('/tasks',TaskRouter)

app.listen(PORT, ()=>{
    console.log(`server is running  on PORT=${PORT}`)
})


