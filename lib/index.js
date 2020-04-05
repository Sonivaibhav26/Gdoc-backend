import express from 'express';
import bodyParser from 'body-parser';
const app = express();
const port = 8080;

import dbService from './services/dbservice';
import routes from './routes'

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());


app.get('/', (req, res) => res.send('Hello World!'));
app.use(function(req, res, next) {
  console.log(req.method, req.url);
  next();
});
app.use('/api', routes);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
