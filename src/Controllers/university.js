const universityService = require('../services/universityService')


const universityController = {

    getUniversities: async(req, res, next) => {
        try {
           const {data} = await universityService.universityService.get(req.params.country); 
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