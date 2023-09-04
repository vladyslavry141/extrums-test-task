'use strict';

const historyRepository = require('../repositories/history.js');

class HistoryService {
  constructor(historyRepository) {
    this.historyRepository = historyRepository;
  }

  async set(value) {
    await this.historyRepository.create(value, new Date());
  }

  async getAll() {
    return await this.historyRepository.getAll();
  }
}

module.exports = new HistoryService(historyRepository);
