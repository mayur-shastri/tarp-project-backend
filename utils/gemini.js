const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GCP_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
module.exports = model;