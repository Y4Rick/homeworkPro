const express = require("express");
const request = require("express");
const app = express();
const bodyParser = require('body-parser');
const apiKey = '508ca0f1d11ebba1aba251b77975845a';

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.render('index', {
        weather: req.weather,
        error: req.error
    });
});

app.post('/', function (req, res) {
    const city = req.body.city;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    let weather;
    let weatherText;
    request(url, function (err, response, body) {
        if (err) {
            res.render('index', {weather: null, error: 'Error, please try again'});
        } else {
            weather = JSON.parse(body);
            if (weather.main == undefined) {
                res.render('index', {weather: null, error: 'Error, please try again'});
            } else {
                weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
                res.render('index', {weather: weatherText, error: null});
            }
        }
    });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});