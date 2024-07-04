const express = require('express');
const { login, dashboard } = require('../controllers/authController');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { redirectIfAuthenticated } = require('../middlewares/redirectIfAuthenticated');

const router = express.Router();

router.get('/login', redirectIfAuthenticated, (req, res) => {
    res.render('index', { page: 'login', module:'login' });
});

router.get('/', authMiddleware, (req, res) => {
    res.render('index', { page: 'dashboard', module:'dashboard' });
});

router.post('/login-auth', login);

router.get('/dashboard', authMiddleware, (req, res) => {
    res.render('index', { page: 'dashboard', module:'dashboard' });
});

module.exports = router;
