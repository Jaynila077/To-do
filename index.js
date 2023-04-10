const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const DB = 'mongodb+srv://jaynila077:jasa077@cluster0.waajaau.mongodb.net/?retryWrites=true&w=majority';

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(DB ,{
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