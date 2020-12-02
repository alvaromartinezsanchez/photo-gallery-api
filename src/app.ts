import express from 'express';
import morgan from 'morgan';
import indexRouter from './routes/index';
import path from 'path';

const app = express();

//Setting
app.set('port', process.env.PORT || 4000);

//middleware
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api', indexRouter);

//carpeta uploads  "Contiene las imagenes subidas"
app.use('/uploads', express.static(path.resolve('uploads')));

export default app;