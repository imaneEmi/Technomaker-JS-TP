const axios = require('axios');

const GET_UNIVERSITIES_URL = 'http://universities.hipolabs.com/search?country=';


function getUniversitiesByCountryService(country) {
    return axios.get(GET_UNIVERSITIES_URL + country);
}

function getAllUniversitiesService() {
    return axios.get(GET_UNIVERSITIES_URL);
}

module.exports = { getUniversitiesByCountryService, getAllUniversitiesService }