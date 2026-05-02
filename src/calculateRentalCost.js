/**
 * @param {number} days
 *
 * @return {number}
 */

const dailyRate = 40;

function calculateRentalCost(days) {
  if (days >= 7) {
    return dailyRate * days - 50;
  } else if (days >= 3 && days < 7) {
    return dailyRate * days - 20;
  } else {
    return dailyRate * days;
  }
}

module.exports = calculateRentalCost;
