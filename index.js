
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const evCarRouter = require('./router');

const port = process.env.PORT || 3000;


const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())
app.use(bodyParser.json())


mongoose.connect(`${process.env.SERVER_MONGO_ATLAS_URL}/carsDB`,
{useNewUrlParser: true,
useUnifiedTopology: true});

app.use('/cars-api', evCarRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Server listening on ${port}`);
  });