'use strict';

module.exports = (target, elements) => {
  const isTargetEmpty = target.length === 0;
  const isElementsEmpty = elements.length === 0;
  if (isTargetEmpty && isElementsEmpty) return true;
  if (isTargetEmpty) return false;

  return elements.every((el) => target.includes(el));
};
