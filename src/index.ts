import { AdventureProvider } from './adventure/adventure.provider';
import express from 'express';

const provider = new AdventureProvider();

const app = express();
const port = 8080;

app.get('/', (req, res) => {
  const adventure = provider.generate();
  console.log('New adventure generated');
  console.log(adventure);

  res.send(adventure);
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
