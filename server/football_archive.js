'use strict';

const app = require('./app');

const PORT = 3050;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
