import { updateBackground } from './background.js';
import { showGreeting } from './greeting.js';
import { paintQuote } from './quote.js';
import { updateTime } from './time.js';
import { displayWeather } from './weather.js';

function init() {
  updateBackground();
  // updateTime();
  paintQuote();
  showGreeting();
  displayWeather();
}

init();
