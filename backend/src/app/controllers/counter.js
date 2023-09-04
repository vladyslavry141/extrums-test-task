'use strict';

const counterService = require('../services/counter.js');

class CounterController {
  constructor(counterService) {
    this.counterService = counterService;
  }

  increment(req, res) {
    const value = counterService.increment();

    return res.status(200).json({ value });
  }

  decrement(req, res) {
    const value = counterService.decrement();

    return res.status(200).json({ value });
  }

  get(req, res) {
    const value = counterService.getValue();

    return res.status(200).json({ value });
  }
}

module.exports = new CounterController(counterService);
