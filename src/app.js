import api from './router/api';
import express from 'express';

const app = express();

app.use('/api', api);

const PORT = 8000;
app.listen(PORT, () => {
  console.log('Server running on port ', PORT);
});
