const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/text-to-speech', textToSpeechRouter);

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});