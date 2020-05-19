const express = require('express');
const app = express();
const path = require('path');

app.get('/api/message', (req, res) => {
  res.json({ message: `Hey there! It's ${new Date()}` });
});

// Static hosting of built React files
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`App listening on port ${port}`));
