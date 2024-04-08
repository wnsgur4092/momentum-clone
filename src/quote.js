//quote.js
const quoteElement = document.querySelector('.quote');
const authorElement = document.querySelector('.quote__author');

function fetchQuote() {
  return fetch('../quotes.json')
    .then((res) => res.json())
    .then((data) => {
      const quoteNumber = Math.floor(Math.random() * data.length) + 1;
      return data[quoteNumber];
    })
    .catch(() => console.error('Cannot get quotes'));
}

export async function paintQuote() {
  const selectedQuote = await fetchQuote();
  if (!selectedQuote) return;
  const { quote: quote, author: author } = selectedQuote;
  quoteElement.innerText = `"${quote}"`;
  authorElement.innerText = author;
}
