const express = require('express');
const app = express();
const PORT = process.env.PORT | 3000;

app.static('./public');

app.listen(PORT);
