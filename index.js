
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
//npm install concurrently

const evCarRouter = require('./router');

const port = process.env.PORT || 3000;


const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())
app.use(bodyParser.json())


mongoose.connect(`mongodb+srv://admin-noel:evCars21@cluster0.hvbfw.mongodb.net/carsDB`,
{useNewUrlParser: true,
useUnifiedTopology: true});

app.use('/cars-api', evCarRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
  });