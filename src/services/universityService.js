const axios = require('axios');

const GET_UNIVERSITIES_URL = 'http://universities.hipolabs.com/search?country=';

const universityService = {

    get: async(country) => {
        try {
            return await axios.get(GET_UNIVERSITIES_URL + country);
        } catch (ex) {
            ex.data;
        }
    },
    getAll: async() => {
        try {
            return await axios.get(GET_UNIVERSITIES_URL);
        } catch (ex) {
            ex.data;
        }
    }
}

module.exports = { universityService }