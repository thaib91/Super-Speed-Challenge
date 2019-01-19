const express = require('express');

const app = express();

app.use(express.static(`${__dirname}/build`));

app.listen(3000, () => console.log('3000 ducks marching on rome'));
