const assert = require('assert');
const request = require('supertest');
const app = require('../../main')

describe('Unit testing', () => {
    it('The​ ​ cost​ ​ of​ ​ cheapest​ ​ delivery​ ​ route​ ​from​ ​ E ​ ​ to​ ​ D = 9', async () => {
        return request(app)
            .get('/api/cheapest/E/D')
            .then((res) => {
                assert.equal(res.status, 200)
                assert.deepEqual(res.body.data, { cost: 9 })
            })
    });

    it('The​ ​ cost​ ​ of​ ​ cheapest​ ​ delivery​ ​ route​ ​from​ ​ E ​ ​ to​ ​ E = 6', async () => {
        return request(app)
            .get('/api/cheapest/E/E')
            .then((res) => {
                assert.equal(res.status, 200)
                assert.deepEqual(res.body.data, { cost: 6 })
            })
    });

    it('The​ ​ cost​ ​ of​ ​ cheapest​ ​ delivery​ ​ route​ ​from​ ​ E ​ ​ to​ ​ C = 6', async () => {
        return request(app)
            .get('/api/cheapest/E/C')
            .then((res) => {
                assert.equal(res.status, 200)
                assert.deepEqual(res.body.data, { cost: 6 })
            })
    });

    it('The​ ​ cost​ ​ of​ ​ cheapest​ ​ delivery​ ​ route​ ​from​ ​ A ​ ​ to​ ​ D = 7', async () => {
        return request(app)
            .get('/api/cheapest/A/D')
            .then((res) => {
                assert.equal(res.status, 200)
                assert.deepEqual(res.body.data, { cost: 7 })
            })
    });

    it('The​ ​ cost​ ​ of​ ​ cheapest​ ​ delivery​ ​ route​ ​from​ ​ D to​ ​ D = 10', async () => {
        return request(app)
            .get('/api/cheapest/D/D')
            .then((res) => {
                assert.equal(res.status, 200)
                assert.deepEqual(res.body.data, { cost: 10 })
            })
    });

    it('The​ ​ cost​ ​ of​ ​ cheapest​ ​ delivery​ ​ route​ from D to C = 7', async () => {
        return request(app)
            .get('/api/cheapest/D/C')
            .then((res) => {
                assert.equal(res.status, 200)
                assert.deepEqual(res.body.data, { cost: 7 })
            })
    });
});