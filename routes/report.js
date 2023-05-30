// Guy Levi 208375899
// Liad Tiblum 206837247
const express = require('express');
const { Cost, Report } = require('../models/database');
const url = require('url');
const router = express.Router();

router.get('/', async function (req, res) {
    const query = url.parse(req.url, true).query;
    const year = query.year;
    const month = query.month;
    const user_id = query.user_id;

    try {
        const checkReport = await Report.findOne({
            user_id: user_id,
            year: year,
            month: month,
        });

        if (checkReport) {
            return res.status(200).json(checkReport.report);
        }

        const costs = await Cost.find({
            user_id: user_id,
            year: year,
            month: month,
        });

        if (costs.length === 0) {
            return res.status(500).send('Error!');
        } else {
            const newReport = new Report({
                user_id: user_id,
                month: month,
                year: year,
            });

            costs.forEach((cost) => {
                newReport.report[cost.category].push({
                    day: cost.day,
                    description: cost.description,
                    sum: parseInt(cost.sum),
                });
            });

            const result = await newReport.save();
            return res.status(200).json(result.report);
        }
    } catch (err) {
        return res.status(500).send(err);
    }
});

module.exports = router;