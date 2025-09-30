import { Type, type TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import type { FastifyInstance } from 'fastify'
import path from 'node:path'
import fs from 'node:fs'

export default function(fastify: FastifyInstance) {
  fastify.withTypeProvider<TypeBoxTypeProvider>()
    .get('/cards/:id', {
      schema: {
        params: Type.Object({
          id: Type.String()
        })
      }
    }, (req, reply) => {
      const cardPath = path.resolve('output', req.params.id)

      if(fs.existsSync(cardPath)) {
        reply.type('image/png').send(fs.readFileSync(cardPath))
      }

      else {
        reply.code(404).send({ error: 'Unknown card' })
      }
    })
}