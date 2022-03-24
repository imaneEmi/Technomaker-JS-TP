const express = require("express");
const axios = require('axios');

const GET_UNIVERSITIES_URL = 'http://universities.hipolabs.com/search?country=';

module.exports.getUniversities = (country) => {
    try {
        const { data } = await axios.get(GET_UNIVERSITIES_URL + country);
        res.render("index", {
            universities: data,
        });
    } catch (ex) {
        res.status(500).send(ex.data);
    }
}