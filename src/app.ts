import express, { Express } from 'express';
import dotenv from 'dotenv'

dotenv.config();
import { errorCreator, errorHandler } from './helpers/error-handler';
import { getAllBanks, getBankByName } from './controllers/banks.controllers';
import path from 'path';


const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
console.log(__dirname)

app.use('/images', express.static(path.join(__dirname, 'public/images')))

app.get('/banks', getAllBanks)
app.get('/banks/:filter', getBankByName)

// create error
app.use(errorCreator);
// send error
app.use(errorHandler);

export default app;