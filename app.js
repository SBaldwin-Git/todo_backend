import express from 'express';
import morgan from 'morgan';

import { router } from './routes/todoRoute.js';

const app = express();
const PORT = process.env.PORT;

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.json());

app.use('/api/todos', router);

app.listen(PORT, function () {
  console.log(`Server listening on port http://localhost:${PORT}`);
});