const model = require('../utils/gemini');

const generateTextService = async (prompt) =>{
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
          maxOutputTokens: 1000,
          temperature: 0.1,
        }
    });
    return result.response.text();
}

module.exports = {generateTextService}