const axios = require('axios');

const NUMBER_TYPES = {
  p: 'primes',
  f: 'fibonacci',
  e: 'even',
  r: 'random'
};

async function fetchNumbers(numberId) {
  const type = NUMBER_TYPES[numberId];
  if (!type) throw new Error('Invalid number ID');

  try {
    const response = await axios.get(`http://20.244.56.144/test/${type}`, {
      timeout: 500
    });
    return [...new Set(response.data.numbers)]; // Remove duplicates
  } catch (error) {
    return []; // Return empty array on timeout/error
  }
}

module.exports = { fetchNumbers };