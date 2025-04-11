const express = require('express');
const { fetchNumbers } = require('../utils/fetchNumbers');
const { calculateAverage } = require('../utils/calculate');
const router = express.Router();

let window = [];
const WINDOW_SIZE = 10;

router.get('/:numberid', async (req, res) => {
  const { numberid } = req.params;
  const prevWindow = [...window];

  try {
    const newNumbers = await fetchNumbers(numberid);
    updateWindow(newNumbers);
    
    res.json({
      windowPrevState: prevWindow,
      windowCurrState: window,
      numbers: newNumbers,
      avg: calculateAverage(window).toFixed(2)
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

function updateWindow(newNumbers) {
  const uniqueNumbers = newNumbers.filter(n => !window.includes(n));
  window = [...window, ...uniqueNumbers].slice(-WINDOW_SIZE);
}

module.exports = router;