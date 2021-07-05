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
app.use(express.urlencoded({ extended: true }));




app.get('/reviews/meta/:product_id', (req, res) => {
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/meta/`, {
    headers: {
      Authorization: process.env.GITHUB_API, // the auth token header
    },
    params: {
      product_id: 11005
    }
  }).then(result => {
    console.log("charac here", result.data)
    res.status(200).json(result.data);
  }).catch(err => {
    console.log(err)
    res.status(500)
  })

});
// get request with sort 
app.get('/reviews/:product_id/:sort', (req, res) => {
  let id = req.params.product_id
  let sort = req.params.sort
  axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/`, {
    headers: {
      Authorization: process.env.GITHUB_API, // the auth token header
    },
    params: {
      product_id: id,
      sort: sort
    }
  }).then(result => {
    console.log("data here", result.data)
    res.status(200).json(result.data);
  }).catch(err => {
    console.log(err)
    res.status(500)
  })

});

app.post(`/reviews`, (req, res) => {
  let data = req.body
  let dataPost = {
    product_id: data.product_id,
    rating: data.rating,
    summary: data.summary,
    body: data.body,
    recommend: data.recommend,
    name: data.name,
    email: data.email,
    photos: [data.photos],
    characteristics: {
      size: {
        id: Math.floor(Math.random() * 10),
        value: data.characteristics.size
      },
      width: {
        id: Math.floor(Math.random() * 10),
        value: data.characteristics.width
      },
      comfort: {
        id: Math.floor(Math.random() * 10),
        value: data.characteristics.comfort
      },
      quality: {
        id: Math.floor(Math.random() * 10),
        value: data.characteristics.quality
      },
      length: {
        id: Math.floor(Math.random() * 10),
        value: data.characteristics.length
      },
      fit: {
        id: Math.floor(Math.random() * 10),
        value: data.characteristics.fit
      }
    }
  }
  const option = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: process.env.GITHUB_API // the auth token header
    }

  }
  axios({
    method: 'post',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews',
    headers: {
      'Content-Type': 'application/json',
      Authorization: process.env.GITHUB_API
    },
    data: dataPost
  }).then(result => {
    res.status(201).send("donnnnnnnnnnnnnnné");
  }).catch(err => {
    console.log(err)
    res.status(500)
  })
})

app.put(`/reviews/:review_id/helpful`, (req, res) => {
  let id = req.params.review_id
  console.log(id, "iddididididididiidi")
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/reviews/${id}/helpful`, {}, {
    headers: {
      Authorization: process.env.GITHUB_API
    }
  }).then(result => {
    res.status(201).send("donnnnnnnnnnnnnnné");
  }).catch(err => {
    console.log(err)
    res.status(500)
  })
})


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

