// Guy Levi 208375899
// Liad Tiblum 206837247

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
        {
            firstname: `Liad`,
            lastname: `Tiblum`,
            id: `206837247`,
            email: `Liadt22@gmail.com`,
        },
    ];

    console.log(developers);
    return res.status(200).send(developers);
});

module.exports = router;