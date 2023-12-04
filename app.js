const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');
const seedDB     = require('./seeds');
const Favorite   = require('./models/menu_fav');
const Drink      = require('./models/drink_menu');
const Food       = require('./models/food_menu');

mongoose.connect('mongodb://localhost/caffelato', {useNewUrlParser: true});

// seedDB();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index')
});

app.get('/gallery', (req, res) => {
    res.render('gallery')
});

app.get('/menu', (req, res) => {
    Favorite.find({}, (err, fav) => {
        if(err) {
            console.log(err)
        } else {
            Drink.find({}, (err, drink) => {
                if(err) {
                    console.log(err)
                } else {
                    Food.find({}, (err, food) => {
                        if(err) {
                            console.log(err)
                        } else {
                            res.render('menu', {favorite: fav, drink: drink, food: food});
                        }
                    })
                }
            })
        }
    })
});


app.get('/menu/:category/:id', (req, res) => {
    if(req.params.category === 'favorite') {
        Favorite.findById(req.params.id, (err, findFav) => {
            if(err) {
                res.redirect('/menu')
            } else {
                res.render('show', {data: findFav})
            }
        })
    } else if(req.params.category === 'drink') {
        Drink.findById(req.params.id, (err, findDrink) => {
            if(err) {
                res.redirect('/menu')
            } else {
                res.render('show', {data: findDrink})
            }
        })
    } else {
        Food.findById(req.params.id, (err, findFood) => {
            if(err) {
                res.redirect('/menu')
            } else {
                res.render('show', {data: findFood})
            }
        })
    }
})

app.get('/about', (req, res) => {
    res.render('about')
});

app.get('*', (req, res) => {
    res.send('No page in here, Please check your url')
})

app.listen(3001, () => console.log('Server has started on port 3001'))