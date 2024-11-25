const express = require('express');
const app = express();
require('./DB')
require('dotenv').config()
const manRouter = require('./Routes/ManDataRoutes')
const womanRouter = require('./Routes/WomanDataRoutes')
const watchRouter = require('./Routes/WatchDataRoutes')
const shoesRouter = require('./Routes/ShoesDataRoutes')
const accessRouter = require('./Routes/AccessDataRoutes')
const signinRouter = require('./Routes/SignInRoutes')
const loginRouter = require('./Routes/LoginRoutes')
const searchRouter = require('./Routes/SearchRoute')
const PORT = process.env.PORT || 4000
const cors = require('cors')
const corsOptions = {
    origin:'https://ecommerce-frontend-nine-kappa.vercel.app',
    methods:'GET,POST',
    allowedHeaders: ['Content-Type', 'Authorization']
}

app.use(cors(corsOptions))

app.get('/',(req,res)=>{
    res.send("Welcome to my VR77 E-commerce website")
})

app.use('/',manRouter);
app.use('/',womanRouter);
app.use('/',watchRouter);
app.use('/',shoesRouter);
app.use('/',accessRouter);
app.use('/',signinRouter);
app.use('/',loginRouter);
app.use('/',searchRouter);


app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})
