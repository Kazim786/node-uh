
const express = require("express");

const app = express();

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const bodyParser = require("body-parser");

//Need a parser middleware before anything

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes); 
//Order doesnt matter anymore. 
//So shopRoutes can be put before adminRoutes too. 
//Only because its not router.use and its router.get. 
//router.get and router.post do exact match of the url. 
//So it wont show the '/'

//even though in app.js file we do app.use for middleware. As long as the route files use .get or .post we can do any order

app.use(shopRoutes);


app.use((req, res, next) => { //catch all middleware - 404 for any invalid url
    res.status(404).send('<h1>Page not found</h1>');

});


//Substitutes server.listen(3000)
app.listen(3000);

