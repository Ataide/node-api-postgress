import { app } from '../app';
import { createUser, getUsers } from '../repositories/user-repository'

app.get('/users', getUsers)

