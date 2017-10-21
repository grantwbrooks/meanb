// var mongoose = require('mongoose');


// var ItemSchema = new mongoose.Schema({
//     item_content:  { type: String, required: true, minlength: 3},
//     questions: [{type: Schema.Types.ObjectId, ref: 'Question'}]
// }, {timestamps: true });

// mongoose.model('Item', ItemSchema);
// var Item = mongoose.model('Item')

// // Use native promises, possibly not needed
// mongoose.Promise = global.Promise;



var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new mongoose.Schema({
    item_content:  { type: String, required: true, minlength: 3},
    questions: [{type: Schema.Types.ObjectId, ref: 'Question'}]
}, {timestamps: true });

// define Comment Schema
var QuestionSchema = new mongoose.Schema({
    _item: {type: Schema.Types.ObjectId, ref: 'Item'},
    question_content: {type: String, required: true },
    option1: {type: {}, required: true, minlength: 3},
    option2: {type: {}, required: true, minlength: 3},
    option3: {type: {}, required: true, minlength: 3},
    option4: {type: {}, required: true, minlength: 3}
}, {timestamps: true });

mongoose.model('Item', ItemSchema);
mongoose.model('Question', QuestionSchema);

var Item = mongoose.model('Item')
var Question = mongoose.model('Question');


// Use native promises, possibly not needed
mongoose.Promise = global.Promise;






