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
});
app.post('/todos/new',  (req, res) => {
    const todo = new Todo({
        text: req.body.text
    });
    todo.save();
    res.json(todo);
});
app.delete('/todos/delete/:id', async (req, res) => {
    const result = await Todo.findByIdAndDelete(req.params.id);
    res.json(result);
});
app.put('/todos/complete/:id', async (req, res) => {
    const todo = await Todo.findById(req.params.id);
    todo.complete = !todo.complete;
    todo.save();
    res.json(todo);
});

app.listen(5000, () => console.log('Server started on port 5000'));     