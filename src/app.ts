import 'dotenv/config';
import "reflect-metadata";
import express from "express";
import './database/connect';
import {router} from "./routes"
import { router as peopleRouters } from './features/peoples/routers';




const app = express() 
app.use(express.json())
app.use(peopleRouters)
app.use(router)


export { app }

