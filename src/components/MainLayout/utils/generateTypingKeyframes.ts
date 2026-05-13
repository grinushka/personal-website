export function generateTypingKeyframes(name: string, words: string[]) {
  let css = `@keyframes ${name} {\n`;
  const step = 100 / (words.length * 2); // typing + deleting cycle per word
  let percent = 0;

  for (const w of words) {
    // typing
    for (let i = 0; i <= w.length; i++) {
      css += `  ${percent.toFixed(4)}% { content: "${w.slice(0, i)}"; }\n`;
      percent += step / (w.length + 1);
    }
    // deleting
    for (let i = w.length; i >= 0; i--) {
      css += `  ${percent.toFixed(4)}% { content: "${w.slice(0, i)}"; }\n`;
      percent += step / (w.length + 1);
    }
  }

  css += "}\n";
  return css;
}
