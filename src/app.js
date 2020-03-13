/* eslint-disable no-console */
import express from 'express';
import trimmer from 'trim-request-body';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes';
import './config/env';

const app = express();
const router = express.Router();

routes(router);

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(trimmer);

app.get('/', (req, res) => res.status(200).json({
  status: 'success',
  message: 'welcome to webTask backend'
}));

app.use('/api/v1', router);

// Handle routes not found
app.use('*', (req, res) => res.status(404).json({
  status: 'error',
  message: 'not found'
}));

// db connection
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', () => { console.log('failed to connect to mongoose'); });
db.once('open', () => {
  console.log('Connected to mongoose');
});

app.listen(process.env.PORT, () => {
  console.log(`listening on ${process.env.PORT}`);
});

export default app;
