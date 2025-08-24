import fastify from "fastify"
import getCard from "../scripts/getCard.ts"

fastify()
.get("/", () => ({ message: "Hello World" }))
.register(getCard)
.listen({
  port: process.env.PORT,
  host: process.env.HOST
})