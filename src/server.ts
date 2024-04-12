import fastify from "fastify";

const app = fastify()

app.get('/', () => {
    return "Hello NLW"
})

app.get('/users', () => {
    return "Hello Test"
})

app.listen({ port: 7777 }).then(() => {
    console.log('HTTP server running!')
})
