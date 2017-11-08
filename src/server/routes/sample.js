const express = require('express');

const router = express.Router();

router.get('/sampleget', (req, res) => {
  res.end('Sample GET Call');
});

router.post('/samplepost', (req, res) => {
  res.end('Sample POST Call');
});

module.exports = router;
