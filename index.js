const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const app = express()
const port = 4000
const path = require('path');
const { Server } = require("socket.io");
const io = new Server({
    cors: {
        origin: "http://localhost:3000"
    }
});
let onlineUsers = []
const addNewUser = (username, socketId) => {
    !onlineUsers.some((user) => user.username === username) &&
        onlineUsers.push({ username, socketId })
}

const disconnectUser = (socketId) => {
    onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId)
}

// const getUser = (username) => {
//     console.log(username);
//     return onlineUsers.find((user) => user.username === username)
// }
io.on("connection", (socket) => {
    socket.on('newUser', (username) => {
        addNewUser(username, socket.id)
    })
    socket.on("sendNotification", ({ message, user }) => {
        io.to(socket.id).emit('getNotification', {
            userId: user,
            message: message
        })
    })
    socket.on('disconnect', () => {
        disconnectUser(socket.id)
    })
});
io.listen(5000);

require('dotenv').config()
require('./passport/bearer')
require('./common/init_scripts/int_script')
require('./database/connect')

app.use(cors());
app.use(morgan('dev'))
app.use(express.urlencoded({ limit: '100mb', extended: false }))
app.use(express.json({ limit: '100mb' }))
app.use(bodyParser.json({ limit: 50 * 1024 * 1024 }))
app.use(bodyParser.urlencoded({ limit: 50 * 1024 * 1024, extended: true, parameterLimit: 50000 }))
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.use(session({ resave: true, secret: process.env.JWT_SECRET, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

const authapi = require('./routes/authApi');
const userApi = require('./routes/userApi');
const foodApi = require('./routes/foodApi');
const orderapi = require('./routes/orderApi');
const notificationApi = require('./routes/notification');

app.use('/api', authapi)
app.use('/api', userApi)
app.use('/api', foodApi)
app.use('/api', orderapi)
app.use('/api', notificationApi)


app.listen(port, () => {
    console.log('App is listening on port ' + port);
})