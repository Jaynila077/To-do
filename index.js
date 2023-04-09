const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/mern-todo',{
    useNewurlParser: true,
    useUnifiedTopology: true
})
    
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const Todo = require('./model/todo');

app.get('/todos', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
})
app.listen(5000, () => console.log('Server started on port 5000'));    