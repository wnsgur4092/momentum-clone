import { paintQuote } from './quote.js';
import { updateTime } from './time.js';

function init() {
  updateTime();
  paintQuote();
}

init();
