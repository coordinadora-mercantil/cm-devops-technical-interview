// libraries
import dotenv from 'dotenv';
dotenv.config();
import fastify from 'fastify';
import cors from 'fastify-cors';
import helmet from 'fastify-helmet';
import formbody from 'fastify-formbody';
import { example } from './routes';

export const application = fastify();

application.register(cors);
application.register(formbody);
application.register(helmet);
application.addHook('onSend', async (req, reply, payload) => {
    const { id, method, url } = req;
    console.log(
        JSON.stringify({
            id,
            method,
            url,
            statusCode: reply.statusCode,
            payload,
        }),
    );
});

application.get('/', example);
application.post('/', example);
