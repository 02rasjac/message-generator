const messages = [
  ["I", "You", "We", "He", "She", "Them"],
  ["can", "will", "might", "should"],
  ["die", "be happy", "survie", "help someone"],
];

const getPart = (index) =>
  messages[index][Math.floor(Math.random() * messages[index].length)];

const generateMessage = () => {
  let part1 = getPart(0);
  let part2 = getPart(1);
  let part3 = getPart(2);

  return `${part1} ${part2} ${part3}`;
};

console.log(generateMessage());
