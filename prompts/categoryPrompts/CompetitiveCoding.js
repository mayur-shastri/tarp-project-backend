const prompt = {
    query: null,
    task: "Generate the stringified JSON response like the sampleResponseFormat. Make sure there is no text before or after the JSON. Response only with the JSON. The sampleResponseFormat is just an example of how the response should be structured. The actual response should select the appropriate visual types and actions based on the given problem.",
    sampleResponseFormat: {
        teacherScript: [
            {
                action: "speak",
                data: "Explanation of the problem statement"
            },
            {
                action: "showVisual",
                visualType: "graph"
            },
            {
                action: "speak",
                data: "Explanation of the input format"
            },
            {
                action: "showVisual",
                visualType: "adjacencyList"
            }
        ],
        visualGenerationPrompts: {
            graph: "Generate a prompt for gemini, which would guide gemini to generate code for visualizing the graph using matplotlib",
            adjacencyList: "Generate a prompt for gemini, which would guide gemini to generate code for visualizing the adjacencyList using networkx"
        }
    }
};