const express = require('express');
const rateLimit = require('express-rate-limit')
const { createProxyMiddleware } = require('http-proxy-middleware');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const app = express();

const limiter = rateLimit({
	windowMs: 5 * 60 * 1000, // 15 minutes
	limit: 10, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(limiter);

app.use('/flightService',createProxyMiddleware({
  target: 'http://localhost:3000',
  changeOrigin: true,
}));


app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});
