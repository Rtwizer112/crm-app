import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import router from './routes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

app.use('/api/v1', router);

export default app;
