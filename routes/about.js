// Guy Levi 208375899

const express = require('express');
let router = express.Router();

router.get('/', function (req, res) {
    console.log('in /about');

    const developers = [
        {
            firstname: `Guy`,
            lastname: `Levi`,
            id: `208375899`,
            email: `Gailevi1414@gmail.com`,
        },
    ];

    console.log(developers);
    return res.status(200).send(developers);
});

module.exports = router;