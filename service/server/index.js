const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3001;




const axios = require('axios');

require('dotenv').config()

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));







app.get('/reviews/:product_id', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/`, {
    headers: {
      Authorization: process.env.GITHUB_API, // the auth token header
    },
    params: {
      product_id: 11001
    }
  }).then(result => {
    console.log("data here", result.data)
    res.status(200).json(result.data);
  }).catch(err => {
    console.log(err)
    res.status(500)
  })

});

app.get('/reviews/meta/:product_id', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/meta/`, {
    headers: {
      Authorization: process.env.GITHUB_API, // the auth token header
    },
    params: {
      product_id: 11001
    }
  }).then(result => {
    console.log("charac here", result.data)
    res.status(200).json(result.data);
  }).catch(err => {
    console.log(err)
    res.status(500)
  })

});



app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

