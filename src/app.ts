import express from 'express';
import { sequelize } from '../models'
import contactRoutes from './routes/contact';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3001',
    optionsSuccessStatus: 200
}))
app.use('/api/contacts', contactRoutes);

sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
});