const assert = require('assert');
const request = require('supertest');
const app = require('../../main')

describe('Testing', () => {
    it('The​ number​ of​ possible​ ​delivery​ ​route​ ​from​ ​E to​ D with​ a maximum​ of​ 4 stop without​ using​ the​ same​ route​ twice in a delivery​ route', async () => {
        return request(app)
            .get('/api/possible/E/E')
            .then((res) => {
                assert.equal(res.status, 200)
                assert.deepEqual(res.body.data, 5)
            })
    });

    it('The​ number​ of​ possible​ ​delivery​ ​route​ ​from​ ​E to​ E without using the same route​ twice in a delivery​ route', async () => {
        return request(app)
            .get('/api/possible/E/D/4')
            .then((res) => {
                assert.equal(res.status, 200)
                assert.deepEqual(res.body.data, 4)
            })
    });
});