/////// if one to many do sorta like this ///////
var mongoose = require('mongoose');
const Schema = mongoose.Schema;
// define Comment Schema
var QuestionSchema = new mongoose.Schema({
    _item: {type: Schema.Types.ObjectId, ref: 'Item'},
    name: {type: String, required: true },
    question_content: {type: String, required: true },
    option1: {type: {}, required: true, minlength: 3},
    option2: {type: {}, required: true, minlength: 3},
    option3: {type: {}, required: true, minlength: 3},
    option4: {type: {}, required: true, minlength: 3}
}, {timestamps: true });
// set our models by passing them their respective Schemas
mongoose.model('Question', QuestionSchema);
// store our models in variables
var Question = mongoose.model('Question');

// Use native promises, possibly not needed
mongoose.Promise = global.Promise;

