const classifyPrompt = `
Classify the following query into:
1. Type: "theory", "problem_solving".
2. Subject: "math", "physics", "chemistry", "biology", "computer_science", "history".

For subjects like history, always set type to theory

If you are unable to deterministically able to classify it into a type, and subject,
set both the type and subject to invalid in the response

Respond in Stringified JSON format, that can be converted to json using JSON.parse method, and 
do not include anything else in the response string, it should only contain the stringified json.
Do not wrap it with \`\`\`json
{
  "query_type": "theory/problem_solving",
  "subject": "subject_name"
}
`

module.exports = classifyPrompt;