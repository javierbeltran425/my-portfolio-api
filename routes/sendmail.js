var express = require('express');
var router = express.Router();

const { sendMail } = require('../controllers/mailer/mailerController');

router.post('/sendmail', sendMail);

module.exports = router;
