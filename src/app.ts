import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/error';
import carRouter from './routes/Car.routes';
import motorcycleRouter from './routes/Motorcycle.routes';

const app = express();
app.use(express.json());

app.use('/cars', carRouter);
app.use('/motorcycles', motorcycleRouter);

app.use(errorHandler);

export default app;
