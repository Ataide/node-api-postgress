import { app } from '../app';
import { createUser, getUsers } from '../repository/user-repository'

app.get('/users', getUsers)

