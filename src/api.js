const express = require('express');

// ...

const app = express();
const routesLogin = require('./routes/login');
const routesUser = require('./routes/user');
const routesCategories = require('./routes/categories');
const routesPost = require('./routes/post');

app.use(express.json());

app.use('/login', routesLogin);
app.use('/user', routesUser);
app.use('/categories', routesCategories);
app.use('/post', routesPost);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
