const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

let whitelist = []
let corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

app.get('/', (req, res) => {
  res.send('We\'ll do it live!');
});

app.get('/data', cors(corsOptions), (req, res) => {
  let data = [{
      "_id": "5c47846337a1cbee4bb6f4e5",
      "name": {
        "first": "Lopez",
        "last": "Henderson"
      },
      "company": "ANOCHA"
    }, {
      "_id": "5c4784639a1c07f2a93b4b8e",
      "name": {
        "first": "Pruitt",
        "last": "Koch"
      },
      "company": "EVENTAGE"
    }, {
      "_id": "5c478463175505e2dc9eb4cd",
      "name": {
        "first": "Moon",
        "last": "Humphrey"
      },
      "company": "BEZAL"
    }, {
      "_id": "5c478463cb434286ae33f68f",
      "name": {
        "first": "Webster",
        "last": "Hull"
      },
      "company": "KIGGLE"
    }, {
      "_id": "5c4784630a3ddf7ef4f8dade",
      "name": {
        "first": "Ayala",
        "last": "Carter"
      },
      "company": "ECLIPTO"
    }, {
      "_id": "5c4784636bf09bfcb8d3ea90",
      "name": {
        "first": "Tabatha",
        "last": "Dennis"
      },
      "company": "STOCKPOST"
    }, {
      "_id": "5c47846394b9ab1306d65eb5",
      "name": {
        "first": "Aurora",
        "last": "Macdonald"
      },
      "company": "DANCERITY"
    }, {
      "_id": "5c478463f04ff60b9c644ee4",
      "name": {
        "first": "Ramos",
        "last": "Cote"
      },
      "company": "PREMIANT"
    }, {
      "_id": "5c47846320fe6aec627d4147",
      "name": {
        "first": "Jodie",
        "last": "Osborn"
      },
      "company": "SLUMBERIA"
    }
  ];
  res.json(data);
});