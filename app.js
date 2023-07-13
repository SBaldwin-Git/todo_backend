import express from 'express';
import { todoRouter } from './routes/todoRoute.js';

const app = express();
const PORT = process.env.PORT;

app.get('/', (req, res) =>
{
    res.send('Hello World!');
});

console.log(PORT);
app.listen(PORT, function () {
  console.log(`Server listening on port http://localhost:${PORT}`);
});

export default app;