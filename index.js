import express, { json, urlencoded } from 'express'
const app = express()
import { getUsers, getUserById, createUser, updateUser, deleteUser } from './queries'
const port = 3000

app.use(json())
app.use(
  urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, e Postgres API' })
})

app.get('/users', getUsers)
app.get('/users/:id', getUserById)
app.post('/users', createUser)
app.put('/users/:id', updateUser)
app.delete('/users/:id', deleteUser)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})