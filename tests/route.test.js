const assert = require('assert');
const request = require('supertest');
const app = require('../main')

describe('Unit testing the eko route', () => {

    // start of tests for finding costs for given route
    it('cost of ABE = 4', async () => {
        return request(app)
            .get('/api/cost/ABE')
            .then((res) => {
                assert.equal(res.status, 200)
                assert.deepEqual(res.body.data, { route: "ABE", cost: 4 })
            })
    });

    it('cost of AD = 10', async () => {
        return request(app)
            .get('/api/cost/AD')
            .then((res) => {
                assert.equal(res.status, 200)
                assert.deepEqual(res.body.data, { route: "AD", cost: 10 })
            })
    });

    it('cost of EACF = 8', async () => {
        return request(app)
            .get('/api/cost/EACF')
            .then((res) => {
                assert.equal(res.status, 200)
                assert.deepEqual(res.body.data, { route: "EACF", cost: 8 })
            })
    });

    // end of tests for finding costs for given route
});