const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
const publicPath = path.join(__dirname, '..', 'build');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// use cors
app.use(cors({
  origin: ['http://localhost:3000', 'https://nhtsa-api-assessment-312309210.herokuapp.com/'],
}));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is up!');
});