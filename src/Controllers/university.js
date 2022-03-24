const universityService = require('../services/universityService')
const express = require("express");
const app = express();

app.set("view engine", "ejs");

const universityController = {
   
    getUniversities: async (req, res, next) => {
        try {
           const {data} = await universityService.universityService.get("Morocco"); 
           res.render("index", {
            universities: data,
            });
        } catch (error) {
           error.msg = "failed to retrieve universities data";
           next(error);
        }
     },
  };




module.exports = {
    universityController
}