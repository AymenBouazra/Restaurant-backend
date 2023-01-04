const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express()
const port = 4000

app.use(cors());
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: 50 * 1024 * 1024 }))
app.use(bodyParser.urlencoded({ limit: 50 * 1024 * 1024, extended: true, parameterLimit: 50000 }))

app.get('/', console.log('hello world'))

app.listen(port, console.log('App running on port ' + port))