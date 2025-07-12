import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

function generateSeries(a) {
  if (!Number.isInteger(a) || a <= 0) {
    throw new Error("Input must be a positive integer.");
  }

  let series = [];
  for (let i = 0; i < a; i++) {
    series.push(1 + i * 2);
  }
  return series.join(", ");
}

async function main() {
  const rl = readline.createInterface({ input, output });
  try {
    const answer = await rl.question("Enter a positive integer: ");
    const number = parseInt(answer);

    const result = generateSeries(number);
    console.log("Output:", result);
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    rl.close();
  }
}

main();