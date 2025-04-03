const express = require('express');
const { generateTextService } = require('../services/generateText');
const classifyPrompt = require('../prompts/classify');

const router = express.Router();

router.post('/', async (req, res) => {
    try{
        const {query} = req.body;
        const prompt = classifyPrompt + '\n' + query;
        const resJsonString = await generateTextService(prompt);
        const resJson = JSON.parse(resJsonString);
        res.send(resJson);
    }
    catch(err){
        console.error("Error:", err.response?.data || err.message);
        res.status(err.response?.status || 500).json({ error: err.message });
    }
});

module.exports = router;