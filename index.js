// play this: https://www.youtube.com/watch?v=d-diB65scQU
const express = require('express')
const cors = require('cors')
const server = express()
const ProjectRouter = require('./data/helpers/projectRouter.js')
const ActionRouter = require('./data/helpers/actionRouter.js')

server.use(express.json())
server.use(cors())
server.use('/api/projects', ProjectRouter)
server.use('/api/actions', ActionRouter)
const port = 4000 // add env variable if time

server.get('/', (req, res) => { res.send(`<h2>Sprint Challenge :)</h2>`)})

server.listen(port, () => console.log(`Server is listening on port ${port}`));