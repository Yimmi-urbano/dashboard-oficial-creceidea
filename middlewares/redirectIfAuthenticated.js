const axios = require('axios');
const { API_VALID_TOKEN_URL } = require('../config');

const redirectIfAuthenticated = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return next();
    }

    try {
        const response = await axios.post(API_VALID_TOKEN_URL, { token });

        if (response.data.valid) {
            return res.redirect('/dashboard');
        } else {
            next();
        }
    } catch (err) {
        next();
    }
};

module.exports = { redirectIfAuthenticated };
