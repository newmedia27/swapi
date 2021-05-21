export function getQuatity(count, itemsOnPage) {
    if (!count || !itemsOnPage) {
      return 1;
    }
    return Math.ceil(count / itemsOnPage);
  }
