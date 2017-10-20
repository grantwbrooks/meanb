var items = require('../controllers/items.js')
var path = require('path');

module.exports = function(app) {
    // Routes

    // Retrieve all Items
    app.get('/items', function(req, res) {
        items.showAll(req, res)
    })
    // Create a Items
    app.post('/items', function(req, res) {
        console.log("-------------------------------inside server route req",req.body);
        items.newItem(req, res);
    })




    // Retrieve an Item by ID
    app.get('/item/:id', function(req, res) {
        items.showItem(req, res)
    })
    // Update a Items by ID
    app.put('/items/:id', function(req, res) {
        items.updateItem(req, res)
    })
    // Delete a Items by ID
    app.delete('/items/:id', function(req, res) {
        console.log("test in here")
        items.deleteItem(req, res)
    })


// //////////One to many functions///////
//     //for getting an Item if it has sub items
//     app.get('/itemwsubs/:id', function (req, res){
//         items.showItemWsubs(req, res)
//     })
//     // route for creating one comment with the parent post id
//     app.post('/createsub/:id', function (req, res){
//         items.createSub(req, res)
//     })


    // Be sure to put as final route so if none of these match we go to Angular routes
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./angularBelt/dist/index.html"))
    });
}
