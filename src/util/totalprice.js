/**
 * @typedef {Object} item
 * @property {string} id
 * @property {string} name
 * @property {string} image
 * @property {string} price
 * @property {string} description
 * @property {number} quantity
 */

/**
 *
 * @param {Array<item>} items
 * @returns {number}
 */

export function getItemsTotalPrice(items) {
  return items.reduce((currentPrice, item) => {
    const price = parseFloat(item.price);
    return currentPrice + (isNaN(price) ? 0 : price) * item.quantity;
  }, 0);
}
