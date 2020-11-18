const parts = [
  ["I", "You", "We", "He", "She", "They"],
  ["can", "will", "might", "should", "won't"],
  ["die", "be happy", "survive", "help someone", "be sad", "be regretful"],
];

/**
 * Randomly select one part of a message
 * @param {int} index The index of the array of messages to take from
 * @returns {string} Part of a message
 */
const getPart = (index, parts) =>
  parts[index][Math.floor(Math.random() * parts[index].length)];

/**
 * Randomly generate a message
 * @returns {string} The generated message
 */
const generateMessage = () => {
  let part1 = getPart(0, parts);
  let part2 = getPart(1, parts);
  let part3 = getPart(2, parts);

  return `${part1} ${part2} ${part3} today.`;
};

console.log(generateMessage());
