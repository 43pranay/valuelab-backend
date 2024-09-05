const { validationResult  } = require('express-validator');

const addNumber = (req,res) => {
    const {number1, number2} = req.query

    const result = validationResult(req);
    console.log(result, 'result');
    
    if (!result.isEmpty()) {
      return res.json({
        code: 400,
        message: 'validation error',
        result: result.errors
      });
    }

    try {
        const add = parseInt(number1) + parseInt(number2)
        res.json({
            code: 200,
            message: 'addition performed',
            result: add
        })
    } catch (error) {
        res.json({
            code: 400,
            message: 'Something went wrong',
            result: null
        })
    }
}

module.exports = {
    addNumber
}