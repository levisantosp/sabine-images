import fastify from "fastify"
import fastifyStatic from "@fastify/static"
import genCards from "../scripts/genCards.ts"
import path from "path"

await genCards()
fastify()
.get("/", () => ({ message: "Hello World" }))
.register(fastifyStatic, { root: path.resolve("output"), prefix: "/cards/" })
.listen({
  port: process.env.PORT,
  host: process.env.HOST
})