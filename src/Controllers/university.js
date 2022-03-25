const {
    getUniversitiesByCountryService,
    getAllUniversitiesService
} = require('../services/universityService')


async function getUniversitiesByCountry(req, res, next) {
    try {
        const { data } = await getUniveritiesByCountryService(req.body.country);
        res.render("index", {
            universities: data,
        });
    } catch (error) {
        res.status(500).render("error-500")
    }
}
async function getAllUniversities(req, res, next) {
    try {
        const { data } = await getAllUniversitiesService();
        res.render("index", {
            universities: data,
        });
    } catch (error) {
        error.msg = "failed to retrieve universities data";
        next(error);
    }
}


module.exports = {
    getUniversitiesByCountry,
    getAllUniversities
}