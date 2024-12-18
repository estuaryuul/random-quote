import quotes from "./quotes";

const getRandomQuotes = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};

export default getRandomQuotes;
