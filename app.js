const express = require("express");
const axios = require('axios');

const app = express();
const SERVER_PORT = 3000


const GET_UNIVERSITIES_URL = 'http://universities.hipolabs.com/search?country=morocco';

app.set("view engine", "ejs");

app.listen(SERVER_PORT, () => {
    app.get('/universities', async (req ,res) => { 
        try {
            const { data } =  await axios.get(GET_UNIVERSITIES_URL);
            res.render("index", {
              universities: data,
              });
          } catch(ex) {
            res.status(500).send(ex.data);
          }
          
      });
      
});