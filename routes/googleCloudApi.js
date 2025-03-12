const express = require('express');
const axios = require('axios');

const model = require('../utils/gemini');

const router = express.Router();

router.post('/text-to-speech', async (req, res) => {
    try {
        const { text } = req.body;
        if (!text) {
            return res.status(400).json({ error: "Text is required" });
        }

        const apiKey = process.env.GCP_API_KEY;
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

router.post('/generate-text', async (req, res) => {
    try{
        const { prompt } = req.body;
        if(!prompt){
            return res.status(400).json({ error: "Prompt is required" });
        }
            const result = await model.generateContent({
            contents: [
                {
                  role: 'user',
                  parts: [
                    {
                      text: prompt,
                    }
                  ],
                }
            ],
            generationConfig: {
              maxOutputTokens: 100,
              temperature: 0.1,
            }
        });
        res.json({ text: result.response.text() });
    }
    catch(err){
        console.error("Error:", err.response?.data || err.message);
        res.status(err.response?.status || 500).json({ error: err.message });
    }
});

module.exports = router;