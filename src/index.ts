import { AdventureProvider } from './adventure/adventure.provider';
import express from 'express';
import { AdventureView } from './views/adventure/adventure.view';

const provider = new AdventureProvider();

const app = express();
const port = 8080;

app.get('/raw', (req, res) => {
  console.log('******************************************');
  const adventure = provider.generate();

  res.send(adventure);
});

app.get('/', (req, res) => {
  const adventure = provider.generate();
  const view = AdventureView.fromAdventure(adventure);

  res.send(view);
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
