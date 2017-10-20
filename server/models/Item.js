var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
    item_content:  { type: String, required: true, minlength: 3},
    isEditable: {type: Boolean, required: true, default: false}
}, {timestamps: true });

mongoose.model('Item', ItemSchema);
var Item = mongoose.model('Item')

// Use native promises, possibly not needed
mongoose.Promise = global.Promise;




// /////// if one to many do sorta like this ///////
// // define Post Schema
// var PostSchema = new mongoose.Schema({
//     text: {type: String, required: true }, 
//     name: {type: String, required: true, minlength: 4}, 
//     comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
// }, {timestamps: true });
// // define Comment Schema
// var CommentSchema = new mongoose.Schema({
//     _post: {type: Schema.Types.ObjectId, ref: 'Post'},
//     text: {type: String, required: true },
//     name: {type: String, required: true, minlength: 4}
// }, {timestamps: true });
// // set our models by passing them their respective Schemas
// mongoose.model('Post', PostSchema);
// mongoose.model('Comment', CommentSchema);
// // store our models in variables
// var Post = mongoose.model('Post');
// var Comment = mongoose.model('Comment');