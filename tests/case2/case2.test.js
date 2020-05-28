const assert = require('assert');
const request = require('supertest');
const app = require('../../main')

describe('Unit testing', () => {
    it('The​ ​ cost​ ​ of​ ​ cheapest​ ​ delivery​ ​ route​ ​ between​ ​ E ​ ​ to​ ​ D = 9', async () => {
        return request(app)
            .get('/api/cost/cheapest/E/D')
            .then((res) => {
                assert.equal(res.status, 200)
                assert.deepEqual(res.body.data, { cost: 9 })
            })
    });
    it('The​ ​ cost​ ​ of​ ​ cheapest​ ​ delivery​ ​ route​ ​ between​ ​ E ​ ​ to​ ​ E = 6', async () => {
        return request(app)
            .get('/api/cost/cheapest/E/E')
            .then((res) => {
                assert.equal(res.status, 200)
                assert.deepEqual(res.body.data, { cost: 6 })
            })
    });
});