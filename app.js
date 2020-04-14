const express = require('express');
const app = express();
const heroesRoute = require('./routes/heroes');
const mainRoute = require('./routes/main');

app.listen(3030, () => console.log('Server running in 3030 port'));

app.use('/heroes', heroesRoute);
app.use('/', mainRoute);



