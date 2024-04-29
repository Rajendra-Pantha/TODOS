const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    task: {
        type: String,
      
    }
});

const todoModel = mongoose.model("todoModel", todoSchema);
module.exports=todoModel
