import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { readdirSync } from "fs"


const morgan = require("morgan")
require('dotenv').config();

const app = express()

//db
mongoose.connect(process.env.DATABASE,{})
    .then(() => console.log("Database connected"))
    .catch((err)=>console.log("DB error=>",err))


//middlewares
app.use(express.json({ limit: "5mb" }))
app.use(cors({origin:[process.env.CLIENT_URL]}))

//autoload routes


readdirSync('./routes').map((r)=> app.use('/api', require(`./routes/${r}`)))
//listen
const port=process.env.PORT || 8000
app.listen(port, ()=>console.log(`server is running on port ${port}`))