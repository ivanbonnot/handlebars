const morgan = require('morgan');
const express = require('express');

const path = require('path')

const app = express();


//Settings
app.set('port', process.env.PORT || 8080)
app.set('json spaces', 2)

//Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('./public'))



app.set("view engine", "pug");
app.set("views", path.join(__dirname, 'views'));

//Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});


//Routes
app.use('/api/productos', require('./routes/products'))





