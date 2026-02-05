const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

// Connect to Database
if (process.env.NODE_ENV !== 'test') {
  connectDB();
}

const http = require('http');
const socketHandler = require('./socket/handlers');

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 8080;

app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

// Initialize Socket.io
socketHandler.init(server);

// Routes
app.use('/api/wikis/:wiki_slug/artifacts', require('./routes/artifacts'));
app.use('/api/wikis/:wiki_slug/artifacts/:artifact_slug/theories', require('./routes/theories'));
app.use('/api/users', require('./routes/users'));

// Health Check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
