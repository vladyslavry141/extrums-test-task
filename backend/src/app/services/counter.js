'use strict';

class CounterService {
  constructor(startValue = 0) {
    this.value = startValue;
  }

  increment() {
    this.value++;
    return this.value;
  }

  decrement() {
    this.value--;
    return this.value;
  }

  reset() {
    this.value = 0;
  }

  getValue() {
    return this.value;
  }
}

module.exports = new CounterService();
