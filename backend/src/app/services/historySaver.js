'use strict';

const historyService = require('./history.js');
const counterService = require('./counter.js');

class HistorySaverService {
  constructor(historyService, counterService, delay) {
    this.historyService = historyService;
    this.counterService = counterService;
    this.delay = delay;
  }

  init() {
    if (this.timer) return;

    this.timer = setInterval(
      () =>
        this.save().catch((error) =>
          console.log('Can`t save counter value. ' + error.message)
        ),
      this.delay
    );
  }

  finish() {
    if (!this.timer) return;

    clearImmediate(this.timer);
  }

  async save() {
    const value = this.counterService.getValue();
    if (value === 0) return;

    await this.historyService.set(this.counterService.getValue());
    counterService.reset();
  }
}

module.exports = new HistorySaverService(
  historyService,
  counterService,
  60 * 1000
);
