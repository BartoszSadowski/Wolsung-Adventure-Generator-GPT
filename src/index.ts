import { AdventureProvider } from './adventure/adventure.provider';
import express from 'express';
import { AdventureView } from './adventure/view/adventure.view';
import path from 'path';

import hbs from 'hbs';

const provider = new AdventureProvider();

const port = 8080;
const app = express();

// views engine
app.set('view engine', 'hbs');
app.set('views', path.join('src', 'views'));
hbs.registerPartials(__dirname + '/views/partials');

// resources
app.use(express.static(path.join(__dirname, '..', 'public')));


// routes
app.get('/raw', (req, res) => {
  const adventure = provider.generate();

  res.send(adventure.toJson());
});

app.get('/', async (req, res) => {
  const adventure = provider.generate();
  const view = await AdventureView.fromAdventure(adventure);

  res.render('adventure', view);
});

// init
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
