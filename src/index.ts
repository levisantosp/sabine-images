import fastify from "fastify"
import fastifyStatic from "@fastify/static"
import genCards from "../scripts/genCards.js"
import path from "path"
import "dotenv/config"

await genCards()
fastify()
.get("/", () => ({ message: "Hello World" }))
.register(fastifyStatic, { root: path.resolve("output"), prefix: "/cards/" })
.listen({
  port: process.env.PORT
})