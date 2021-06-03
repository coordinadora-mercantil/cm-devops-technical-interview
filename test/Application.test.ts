import { application } from '../src/application';

describe('Testing App Request', () => {
    it('debería retornar 404', async () => {
        const response = await application.inject({
            method: 'GET',
            url: '/route-not-found',
        });
        expect(response.statusCode).toBe(404);
    });

    it('debería retornar 200', async () => {
        const response = await application.inject({
            method: 'GET',
            url: '/',
        });
        expect(response.statusCode).toBe(200);
        const body = JSON.parse(response.body);
        expect(body.isError).toBe(false);
    });
});
