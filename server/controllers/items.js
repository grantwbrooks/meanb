var mongoose = require('mongoose');
var Item = mongoose.model('Item');
var Question = mongoose.model('Question');
// var session = require('express-session');
////////if one to many be sure to include both up here/////


module.exports = {
    showAll: function(req, res) {
        Question.find({}, function(err, items) {
            if(err) {
                console.log("didn't get item data");
                // res.send('did not work');
            } else {
                console.log("got item data");
                console.log("this is the user seesion",req.session);
                res.json(items);
            }
        })
    },
    newItem: function(req, res) {
        console.log("name from URL", req.body);
        Item.create(req.body, function(err, item) {
            // if there is an error console.log that something went wrong!
            if(err) {
                console.log('something went wrong saving user');
                console.log(err.errors);
                // res.send({errors: item.errors});
            } else { // else console.log that we did well and then redirect to the root route
                console.log('successfully added a Item!', item);
                console.log("before session name set",req.session)
                req.session.name = item._id;
                // res.send('added a item!'+item);
                console.log("session var saved",req.session)
                res.json(item);
            }
        })
    },





    showItem: function(req, res) {
        console.log("item id-----"+"ObjectId('"+req.params.id+"')")
        // Fish.find({_id:"ObjectId('"+req.params.id+"')"}, function(err, fishies) {
            Question.findOne({_id:req.params.id}, function(err, item) {
            if(err) {
                console.log("didn't get item data");
                // res.send('can not show item');
            } else {
                console.log("got item data", item);
                res.json(item);
            }
        })
    },
    
    updateItem: function(req, res) {
        console.log("POST DATA-----", req.body);
        console.log("ID", req.params.id);
        // Fish.findOne({_id:req.params.id}, function(err, fishy) {
        //     fishy.name = req.body.name;
        //     fishy.length = req.body.length;
        //     fishy.save(function(err){
        //         if(err) {
        //             console.log('something went wrong saving user');
        //             console.log(fishy.errors);
        //             res.render('/', {errors: fishy.errors});
        //         } else { // else console.log that we did well and then redirect to the root route
        //             console.log('successfully updated a fish!');
        //             res.redirect('/');
        //         }
        //     })    
        // })
    // try another way with update method instead:
        Question.update({_id:req.params.id}, req.body, function(err, item) {
            if(err) {
                console.log('something went wrong saving item');
                console.log(err.errors);
                // res.send(err.errors);
            } else { // else console.log that we did well and then redirect to the root route
                console.log('successfully updated a item!');
                res.json(item);
            }
        })
    },

    
    deleteItem: function(req, res) {
        console.log("ID", req.params.id);
        Item.remove({_id: req.params.id}, function(err) {
            if(err) {
                console.log('something went wrong deleting a item');
                console.log(err.errors);
                // res.send(err.errors);
            } else { // else console.log that we did well and then redirect to the root route
                console.log('successfully deleted a item!');
                res.json(true);
            }
        })
    },


// //////////One to many functions///////
//     //for getting an Item if it has sub items
//     showItemsWsubs: function(req, res) {
//         Item.findOne({_id: req.params.id})
//         .populate('comments')
//         .exec(function(err, item) {
//             res.json(item);
//         });
//     },
    // route for creating one comment with the parent post id
    createSub: function(req,res) {
        Item.findOne({_id: req.session.name}, function(err, item){
            var subitem = new Question(req.body);
            console.log("got item back",req.session.name);
            subitem._item = item._id;
            subitem.name = item.item_content;
            item.questions.push(subitem);
            subitem.save(function(err){
                if(err) {
                    console.log('Error********------>', err.errors);
                    // myerrors = err.errors
                    // res.render('index',{errors: err.errors});
                    // res.redirect('/');
                }
                else {
                    item.save(function(err){
                            if(err) { 
                                console.log('Error********------>', err.errors);
                                // myerrors = err.errors
                                // res.render('index',{errors: err.errors});
                                // res.redirect('/');
                            } 
                            else { 
                                myerrors = [];
                                console.log('saved a new comment', item)
                                // res.redirect('/'); 
                            }
                    });
                }
            });
        });
    },

    logout: (req, res) => {
		req.session.destroy()
		res.redirect("/")
	}





}
