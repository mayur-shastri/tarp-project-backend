const {Router} = require('express').Router();
const axios = require('axios');

const router = Router();

router.post('/', async (req, res) => {
    const { text } = req.body;
    const apiKey = process.env.TEXT_TO_SPEECH_API_KEY;
    const endPoint = `https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=${apiKey}`;
    const payLoad = {
        audioConfig: {
          "audioEncoding": "MP3",
          "effectsProfileId": [
            "small-bluetooth-speaker-class-device"
          ],
          "pitch": 0,
          "speakingRate": 1
        },
        "input": {
          "text": text
        },
        "voice": {
          "languageCode": "en-US",
          "name": "en-US-Chirp-HD-F"
        }
      }

    const response = await axios.post(endPoint, payLoad);
    res.json(response.data);
});

module.exports = router;