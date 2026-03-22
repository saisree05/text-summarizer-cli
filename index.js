import fs from "fs";

const getInputText = () => {
  const filePath = process.argv[2];

  if (filePath) {
    try {
      return fs.readFileSync(filePath, "utf-8");
    } catch {
      console.error("❌ File not found");
      process.exit(1);
    }
  }

  return "";
};

// 🔥 Mock LLM function (simulates AI response)
const generateSummary = (text) => {
  return {
    summary: "AI is transforming industries rapidly.",
    key_points: [
      "Companies are investing heavily in AI",
      "AI adoption is increasing across sectors",
      "Ethical concerns are growing"
    ],
    sentiment: "neutral"
  };
};

const run = () => {
  const inputText = getInputText();

  if (!inputText.trim()) {
    console.error("❌ No input provided");
    return;
  }

  const result = generateSummary(inputText);

  console.log("\n📊 Structured Summary:\n");
  console.log("Summary:", result.summary);

  console.log("\nKey Points:");
  result.key_points.forEach((point, i) => {
    console.log(`${i + 1}. ${point}`);
  });

  console.log("\nSentiment:", result.sentiment);
};

run();