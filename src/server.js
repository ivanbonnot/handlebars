const morgan = require('morgan');
const express = require('express');
const exphbs = require('express-handlebars')


const app = express();


//Settings
app.set('port', process.env.PORT || 8080)
app.set('json spaces', 2)


//HBS
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('views', './views');


//Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('./public'))


//Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});


//Routes
app.use('/api/productos', require('./routes/products'))





