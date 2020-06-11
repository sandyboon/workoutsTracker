const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// api routes
app.use(require('./routes/apiRoutes.js'));

//html routes
app.use(require('./routes/htmlRoutes.js'));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
