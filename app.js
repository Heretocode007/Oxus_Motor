const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')
const app = express()
const dotenv = require('dotenv');
dotenv.config({path: './config.env'})

app.use(cors())


const connectDB = async () => {
  await mongoose.connect(process.env.DATABASE, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('db connected..!');
};

connectDB()

app.use(express.json())

const carRouter = require('./routes/cars')
app.use('/cars', carRouter)

const inventoryRouter = require('./routes/inventory')
app.use('/inventory', inventoryRouter)

const contactUsRouter = require('./routes/contactUs')
app.use('/contactUs', contactUsRouter)

const homeRouter = require('./routes/home')
app.use('/home', homeRouter)

const Port = process.env.PORT || 3000;

app.listen(Port, () => {
  console.log('Server started')
  console.log(`app is running on port ${Port}`);
})
