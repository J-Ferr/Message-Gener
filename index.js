// Array of different parts of the message
const openingPhrases = [
    "Your heart is a house on fire,",
    "You move like the ocean,",
    "The enegry you give out always returns,"
];

const middlePhrases = [
    "take advantage of this power,",
    "so dont waste this energy,",
    "put it to good use before it consumes you,"
];

const closingPhrases = [
    "to accomplish what needs to be done.",
    "your journey is just begining.",
    "or someone else takes it from you."
];

// Function to generate a random index based on array length
const getRandomIndex = (array) => Math.floor(Math.random() * array.length);

// Function to generate a random message
const generateMessage = () => {
    const opening = openingPhrases[getRandomIndex(openingPhrases)];
    const middle = middlePhrases[getRandomIndex(middlePhrases)];
    const closing = closingPhrases[getRandomIndex(closingPhrases)];
    
    return `${opening} ${middle} ${closing}`;
};

// Print the generated message to the console
console.log(generateMessage());
