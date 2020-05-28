const assert = require('assert');
const request = require('supertest');
const app = require('../../main')

describe('Unit testing', () => {
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

    it('cost of BE = 3', async () => {
        return request(app)
            .get('/api/cost/BE')
            .then((res) => {
                assert.equal(res.status, 200)
                assert.deepEqual(res.body.data, { route: "BE", cost: 3})
            })
    });

    it('cost of EACFD = 9', async () => {
        return request(app)
            .get('/api/cost/EACFD')
            .then((res) => {
                assert.equal(res.status, 200)
                assert.deepEqual(res.body.data, { route: "EACFD", cost: 9 })
            })
    });

    it('cost of EACFDE = 10', async () => {
        return request(app)
            .get('/api/cost/EACFDE')
            .then((res) => {
                assert.equal(res.status, 200)
                assert.deepEqual(res.body.data, { route: "EACFDE", cost: 10 })
            })
    });

    it('cost of CFDEB = 7', async () => {
        return request(app)
            .get('/api/cost/CFDEB')
            .then((res) => {
                assert.equal(res.status, 200)
                assert.deepEqual(res.body.data, { route: "CFDEB", cost: 7 })
            })
    });
});