import { FastifyRequest, FastifyReply } from 'fastify';

export const example = async (req: FastifyRequest, reply: FastifyReply): Promise<FastifyReply | void> => {
    return reply.send({ isError: false, id: req.id });
};
