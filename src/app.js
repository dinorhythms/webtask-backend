import express from 'express';
import trimmer from 'trim-request-body';
import cors from 'cors';
import routes from './routes';

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

app.listen(4000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on 4000');
});

export default app;
