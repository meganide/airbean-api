import express from 'express';
import bodyParser from 'body-parser';
import api from './router/api.js';
import connectDB from './config/db.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

connectDB();

app.use('/api', api);

const PORT = 8000;
app.listen(PORT, () => {
  console.log('Server running on port ', PORT);
});
