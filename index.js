import express from 'express';
import tasksRouter from './src/routes/tasks.routes.js'

const app = express();
const port = 4004;

app.use(express.json())

app.use('/tasks', tasksRouter)



app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));