const axios = require('axios');
const { AP_AUTH_LOGIN } = require('../config');

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const response = await axios.post(AP_AUTH_LOGIN, { email, password });

        if (response.data.status === 'success') {
            const token = response.data.data.token.value;
            res.cookie('token', token, { httpOnly: true });
            res.status(200).json({ message: 'Login successful' });
        } else if (response.data.status === 'error') {
            res.status(401).json({ message: response.data.message });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (err) {
        console.error('Error during login:', err);
        res.status(500).json({ message: 'Error during login' });
    }
};

const dashboard = (req, res) => {
    res.render('dashboard');
};

module.exports = { login, dashboard };
