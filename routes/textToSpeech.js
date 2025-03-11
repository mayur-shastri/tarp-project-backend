const express = require('express');
const axios = require('axios');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { text } = req.body;
        if (!text) {
            return res.status(400).json({ error: "Text is required" });
        }

        const apiKey = process.env.TEXT_TO_SPEECH_API_KEY;
        const endPoint = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`;
        
        const payLoad = {
            input: { text },
            voice: {
                languageCode: "en-US",
                name: "en-US-Standard-A"
            },
            audioConfig: {
                audioEncoding: "MP3",
                pitch: 0,
                speakingRate: 1,
                effectsProfileId: ["small-bluetooth-speaker-class-device"]
            }
        };

        const response = await axios.post(endPoint, payLoad);
        res.json(response.data);
        
    } catch (err) {
        console.error("Error:", err.response?.data || err.message);
        res.status(err.response?.status || 500).json({ error: err.message });
    }
});

module.exports = router;