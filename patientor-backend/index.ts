import express from 'express';
import diagnosisRoute from './routes/diagnosis';
import patientRoute from './routes/patient';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/diagnoses', diagnosisRoute);
app.use('/api/patients', patientRoute);

const PORT = 3000;

app.get('/api/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});