const classifyPrompt = {
    query: null,
    task: "Classify the query into one of the categories, in the categories array",
    categories: [
        "Algorithm Walkthroughs",
        "Competitive Coding Problems & Solutions",
        "Mathematical Proofs & Derivations",
        "Physics Concepts & Simulations",
        "Chemistry Reactions & Molecular Structures",
        "Biology Process Explanations",
        "Code Explanation & Debugging",
        "Software Installation & Setup Guides",
        "Theoretical Computer Science & CS Fundamentals",
        "Conceptual Comparisons & Explanations"
    ],
    responseFormat: "Response with just the name of the category, with no other information before or after the name"
}

module.exports = classifyPrompt;