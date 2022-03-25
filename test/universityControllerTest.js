let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
chai.use(chaiHttp);
let app = require('../app');

describe('Get All Universities', () => {
    it('it should GET all the universities', () => {
        chai.request(app)
            .get('/universities-of-the-world')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.an('array');
            });
    });
});

describe('Get All Universities of a Given Country', () => {
    it('it should Retun all universities of given country', () => {
        let country = "Morocco"
        chai.request(app)
            .post('/universities')
            .send(country)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.an('array');
            });
    });
});