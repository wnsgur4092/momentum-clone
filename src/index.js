import { updateBackground } from './background.js';
import { paintQuote } from './quote.js';
import { updateTime } from './time.js';

function init() {
  updateBackground();
  // updateTime();
  paintQuote();
}

init();
