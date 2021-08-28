import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
import { errorCreator, errorHandler } from './helpers/error-handler';
import { getAllBanks, getBanksByName } from './controllers/banks.controllers';
import path from 'path';

const app: Express = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/images', express.static(path.join(__dirname, 'public/images')));

app.get('/banks', getAllBanks);
app.get('/banks/:filter', getBanksByName);

// create error
app.use(errorCreator);
// send error
app.use(errorHandler);

export default app;
