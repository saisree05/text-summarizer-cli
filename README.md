Text Summarizer CLI

**Author:** Sai Sree

## Overview
This is a simple command-line tool that takes unstructured text input and generates a structured summary using an LLM (mocked for this assignment).

## Features
- One-line summary
- Three key points
- Sentiment analysis (positive / neutral / negative)

## Setup
npm install
node index.js sample.txt
Example Output

📊 Structured Summary:

Summary: AI is transforming industries rapidly.

Key Points:

Companies are investing heavily in AI
AI adoption is increasing across sectors
Ethical concerns are growing

Sentiment: neutral

LLM Usage:

Due to API limitations, a mock response is used. The structure is designed to easily integrate with real APIs like OpenAI or Gemini.

Trade-offs
Mock response instead of real API
No advanced error handling

Future Improvements:

Integrate real LLM API
Add stdin support
Improve error handling

Prompt Design:

The prompt is structured to guide the model to return output in a consistent format:
- One sentence summary
- Three bullet key points
- A sentiment label

This ensures the output is predictable and easy to parse in code.

Note:
This project was completed as part of an AI Developer Intern assignment.
While I am new to Node.js, I focused on solving the problem and building a working solution.on solving the problem and building a working solution.
