function calculateAverage(numbers) {
    if (!numbers.length) return 0;
    const sum = numbers.reduce((a, b) => a + b, 0);
    return sum / numbers.length;
  }
  
  module.exports = { calculateAverage };