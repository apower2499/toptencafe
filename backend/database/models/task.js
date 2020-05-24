const mongoose = require('mongoose');

const TaskShema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        minLength: 3
    },
    _listId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

const Task = mongoose.model('Task', TaskShema);

module.exports = Task;