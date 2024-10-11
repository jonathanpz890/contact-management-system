import express from 'express';
import { sequelize } from '../models'
import routes from './routes';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';

dotenv.config();
const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors({
    origin: 'http://localhost:3001',
    optionsSuccessStatus: 200
}))

app.use('/api', routes);

sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
});