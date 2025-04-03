const express = require('express');
const axios = require('axios');

const model = require('../utils/gemini');
const { generateText, textToSpeech } = require('../controllers/googleCloudApi');

const router = express.Router();

router.post('/text-to-speech', textToSpeech);

router.post('/generate-text', generateText);

module.exports = router;