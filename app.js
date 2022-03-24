var express = require("express");
const axios = require('axios');
const cors = require('cors');

const END_POINT = 'http://universities.hipolabs.com/search?country=morocco';

var app = express();
app.use(cors( { origin: '*'}));
app.set("view engine", "ejs");
app.listen(3000, () => {
    app.get('/', async (req, res) => { 
        try {
            const { data } =  await axios.get(END_POINT);
            res.render("index", {
              universities: data,
              });
          } catch(ex) {
            res.status(500).send(ex.data);
          }
          
      });
      
});