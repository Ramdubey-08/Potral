const express = require('express');
const cors = require('cors');
const internRoutes = require('./routes/intern');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/intern', internRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
