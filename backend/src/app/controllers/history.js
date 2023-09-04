'use strict';

const historyService = require('../services/history.js');

class CounterController {
  constructor(historyService) {
    this.historyService = historyService;
  }

  async get(req, res, next) {
    try {
      const history = await historyService.getAll();
      return res.status(200).json({ history });
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = new CounterController(historyService);
