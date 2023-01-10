const express       = require('express');
const morgan        = require('morgan');
const cors          = require('cors');
const bodyParser    = require('body-parser');
const passport      = require('passport');
const session       = require('express-session');
const app           = express()
const port          = 4000
require('dotenv').config()
require('./passport/bearer')
require('./database/connect')
require('./common/init_scripts/int_script')

app.use(cors());
app.use(morgan('dev'))
app.use(express.urlencoded({ limit: '100mb', extended: false }))
app.use(express.json({limit: '100mb'}))
app.use(bodyParser.json({ limit: 50 * 1024 * 1024 }))
app.use(bodyParser.urlencoded({ limit: 50 * 1024 * 1024, extended: true, parameterLimit: 50000 }))
app.use(session({ resave: true, secret: process.env.JWT_SECRET, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

const authapi = require('./routes/authApi');
const userApi = require('./routes/userApi');

app.use('/', authapi)
app.use('/api', userApi)


app.listen(port,()=> {
    console.log('App is listening on port '+port);
})