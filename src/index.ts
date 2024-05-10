import express from 'express';
import tasksRouter from './routes/task.route';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/tasks', tasksRouter);

app.listen(8000, () => console.log('Server listening at port 8000'));
