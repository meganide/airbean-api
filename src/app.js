import express from 'express';
import api from './router/api';

const app = express();

app.use('/api', api);

const PORT = 8000;
app.listen(PORT, () => {
  console.log('Server running on port ', PORT);
});
