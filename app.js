const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const moment = require('moment')
app.locals.moment = moment;
const path = require('path');


app.use(express.static('public'))
app.get('/weather', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/weather.html'));
});
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', require('./routes/news'))

app.set('views', './views')

app.listen(port, () => console.log("started", port))