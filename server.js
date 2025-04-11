const express = require('express');
const numbersRouter = require('./routes/numbers');
const app = express();

app.use(express.json());
app.use('/numbers', numbersRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));