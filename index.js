
const Express = require('express');
const CORS = require('cors');
const Visitor = require('./app/visitor.js');
const AppRoot = require('app-root-path');

const Stats = require('./app/stats.js');

const app = Express();
const port = 3000;

app.use(CORS());
//app.use(cors(
//  origin: 'http://127.0.0.1:5500',
//  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//  allowedHeaders: ['Content-Type', 'Authorization']
//));
//app.options('*', cors()); // Explicitly handle preflight OPTIONS requests
app.use(Express.json());

global.STATS_FILENAME = AppRoot.resolve('data.json');

app.post('/api/visitor', (req, res) => {
  const agent = req.get('User-Agent');
  const params = req.body;

  let visitor = new Visitor(req.ip, agent);

  visitor.addVisit(params.start, params.end, params.dest);
  visitor.save();

  res.status(200).json(visitor);
});

app.get('/api/visitor/stats', (req, res) => {
  const stats = Stats.load(global.STATS_FILENAME);

  res.status(200).json(stats);
});


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});