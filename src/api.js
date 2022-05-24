const express = require('express');

// ...

const app = express();
const routesLogin = require('./routes/login');

app.use(express.json());

app.use('/login', routesLogin);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
