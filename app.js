import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import { router } from './routes/todoRoute.js';

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(morgan('dev'));
// LOADS FROM THE PUBLIC FOLDER WHICH IS THE HTML FILE
app.use(express.static('public'));
app.use(express.json());

// THE URL FOR THE ROUTES IS /api/todos
app.use('/api/todos', router);

app.use(express.static("public"));

// Heoroku!!

app.listen(PORT, function () {
  console.log(`Server listening on port http://localhost:${PORT}`);
});