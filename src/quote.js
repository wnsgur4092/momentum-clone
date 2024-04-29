//quote.js
import { getRandomInt } from './util.js';

const quote = document.querySelector('.quote');
const author = document.querySelector('.quote__author');

function fetchQuote() {
  return fetch('../quotes.json')
    .then((res) => res.json())
    .then((data) => {
      const randomNumber = getRandomInt(data.length);
      return data[randomNumber];
    })
    .catch(() => console.error('Cannot get quotes'));
}

export async function paintQuote() {
  const selectedQuote = await fetchQuote();
  if (!selectedQuote) return;
  const { quote: quoteMsg, author: quoteAuthor } = selectedQuote;
  quote.innerText = `"${quoteMsg}"`;
  author.innerText = quoteAuthor;
}
