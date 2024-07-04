const axios = require('axios');
const { API_VALID_TOKEN_URL } = require('../config');

const authMiddleware = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.redirect('/login');
    }

    try {
        const response = await axios.post(API_VALID_TOKEN_URL, { token });

        if (response.data.valid) {
            next();
        } else {
            res.redirect('/login');
        }
    } catch (err) {
        res.redirect('/login');
    }
};

module.exports = { authMiddleware };
