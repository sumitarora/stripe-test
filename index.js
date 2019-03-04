const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');

const routes = require('./routes/index');
const payment = require('./routes/payment');
const customer = require('./routes/customer');
const authorization = require('./routes/authorization');
const webhook = require('./routes/webhook');
const connect = require('./routes/connect');
const test = require('./routes/test');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static('public'))
app.set('view engine', 'pug')

app.get('/', routes.index);
app.post('/payment', payment.index);
app.post('/customer', customer.index);
app.post('/authorization', authorization.index);
app.post('/webhook', webhook.index);
app.get('/connect', connect.index);
app.post('/connect/webhook', connect.webhook);
app.get('/test', test.index);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))