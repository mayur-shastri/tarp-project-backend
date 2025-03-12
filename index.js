require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const googleCloudApiRouter = require('./routes/googleCloudApi');

const app = express();

app.use(express.json());
app.use(cors(
    {
        origin: 'http://localhost:5173'
    }
));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/gcp', googleCloudApiRouter);

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});