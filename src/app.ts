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
    origin: process.env.ALLOWED_ORIGINS?.split(','),
    optionsSuccessStatus: 200
}))

//API routes
app.use('/api', routes);

sequelize.sync().then(() => {
    const server = app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
    process.on('SIGTERM', () => {
        console.log('Closing server gracefully...');
        server.close(() => {
            console.log('Server closed.');
            sequelize.close().then(() => {
                console.log('Database connection closed.');
                process.exit(0);
            }).catch((error: any) => {
                console.error('Error while closing database connection:', error);
                process.exit(1);
            });
        });
    });
}).catch(error => {
    console.error('Failed to sync database:', error);
})