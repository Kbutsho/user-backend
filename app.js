const express = require('express');
const cors = require('cors');
const userRouter = require('./Route/User.route');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
    cors({
        origin: ["http://localhost:3000",
            "https://job-portal-frontend-one.vercel.app"],
        credentials: true,
    })
);
//route
app.use("/api/user", userRouter)
app.get('/', (req, res) => {
    res.json({
        'status': 200,
        'message': 'index',
    });
});
app.get('/api', (req, res) => {
    res.json({
        'status': 200,
        'message': 'index api',
    });
});
app.all('*', (req, res) => {
    res.json({
        'status': 400,
        'message': 'api not found',
    });
});

module.exports = app;

