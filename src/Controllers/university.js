const {universityService} = require('../services/universityService')

var bodyParser=require("body-parser");

const universityController = {

    getUniversities: async(req, res, next) => {
        try {
           const {data} = await universityService.get(req.body.country); 
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