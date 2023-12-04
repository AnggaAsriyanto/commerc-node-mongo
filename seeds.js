const mongoose = require('mongoose');
const Favorite = require('./models/menu_fav');
const Drink    = require('./models/drink_menu');
const Food     = require('./models/food_menu');

const mfData = [
    {
        image: 'https://images.unsplash.com/photo-1557142046-c704a3adf364?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        title: 'Ice Cream',
        desc: 'Is just a Ice Cream',
        price: '15.000'
    },
    {
        image: 'https://images.unsplash.com/photo-1557142046-c704a3adf364?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        title: 'Ice Cream',
        desc: 'Is just a Ice Cream',
        price: '15.000'
    },{
        image: 'https://images.unsplash.com/photo-1557142046-c704a3adf364?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        title: 'Ice Cream',
        desc: 'Is just a Ice Cream',
        price: '15.000'
    },{
        image: 'https://images.unsplash.com/photo-1557142046-c704a3adf364?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        title: 'Ice Cream',
        desc: 'Is just a Ice Cream',
        price: '15.000'
    },{
        image: 'https://images.unsplash.com/photo-1557142046-c704a3adf364?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        title: 'Ice Cream',
        desc: 'Is just a Ice Cream',
        price: '15.000'
    }
];

const dmData = [
    {
        image: 'https://images.unsplash.com/photo-1582192322901-2aa55aaac13f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        title: 'Coffe Mocha',
        desc: 'Is just a Coffe Mocha',
        price: '15.000'
    },
    {
        image: 'https://images.unsplash.com/photo-1582192322901-2aa55aaac13f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        title: 'Coffe Mocha',
        desc: 'Is just a Coffe Mocha',
        price: '15.000'
    },
    {
        image: 'https://images.unsplash.com/photo-1582192322901-2aa55aaac13f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        title: 'Coffe Mocha',
        desc: 'Is just a Coffe Mocha',
        price: '15.000'
    },
    {
        image: 'https://images.unsplash.com/photo-1582192322901-2aa55aaac13f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        title: 'Coffe Mocha',
        desc: 'Is just a Coffe Mocha',
        price: '15.000'
    },
    {
        image: 'https://images.unsplash.com/photo-1582192322901-2aa55aaac13f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        title: 'Coffe Mocha',
        desc: 'Is just a Coffe Mocha',
        price: '15.000'
    }
];

const fmData = [
    {
        image: 'https://images.unsplash.com/photo-1616866866413-0ee9e3f7fbd2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
        title: 'Omelete Sapi',
        desc: 'Is just a Omelete Sapi',
        price: '15.000'
    },
    {
        image: 'https://images.unsplash.com/photo-1616866866413-0ee9e3f7fbd2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
        title: 'Omelete Sapi',
        desc: 'Is just a Omelete Sapi',
        price: '15.000'
    },{
        image: 'https://images.unsplash.com/photo-1616866866413-0ee9e3f7fbd2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
        title: 'Omelete Sapi',
        desc: 'Is just a Omelete Sapi',
        price: '15.000'
    },{
        image: 'https://images.unsplash.com/photo-1616866866413-0ee9e3f7fbd2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
        title: 'Omelete Sapi',
        desc: 'Is just a Omelete Sapi',
        price: '15.000'
    },{
        image: 'https://images.unsplash.com/photo-1616866866413-0ee9e3f7fbd2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
        title: 'Omelete Sapi',
        desc: 'Is just a Omelete Sapi',
        price: '15.000'
    },
];

function seedDB() {
    mfData.forEach((mf) => {
        Favorite.create(mf, (err, menufav) => {
            if(err) {
                console.log(err)
            } else {
                console.log('Added Menu Favorite');
                console.log(menufav);
                menufav.save();
            }
        })
    });
    dmData.forEach((dm) => {
        Drink.create(dm, (err, drinkmenu) => {
            if(err) {
                console.log(err)
            } else {
                console.log('Added Menu Favorite');
                console.log(drinkmenu);
                drinkmenu.save();
            }
        })
    });
    fmData.forEach((fm) => {
        Food.create(fm, (err, foodmenu) => {
            if(err) {
                console.log(err)
            } else {
                console.log('Added Menu Favorite');
                console.log(foodmenu);
                foodmenu.save();
            }
        })
    })
}

module.exports = seedDB;

