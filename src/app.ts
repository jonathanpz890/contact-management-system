import express from 'express';
import { sequelize } from '../models';

const app = express();
app.use(express.json());


sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
});