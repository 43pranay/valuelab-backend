const express = require('express');
const { addNumber } = require('../controller/data.controller');
const { query } = require('express-validator');

const apiRoutes = express.Router()

// apiRoutes.get('add-number', validateData, addNumber)
apiRoutes.get('/add-number', query('number1').notEmpty().isInt(), query('number2').notEmpty().isInt(), addNumber)

module.exports = {
    apiRoutes
}