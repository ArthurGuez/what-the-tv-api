if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const express = require('express');
const cors = require('cors');

const router = require('./routes');
const { errorLogger, errorHandler } = require('./middlewares');
const NotFoundError = require('./helpers/errors/not_found_error');

const app = express();

app.use(cors());

app.use('/api', router);
// app.use('*', (req, res, next) => {
// 	throw new NotFoundError();
// });
app.use(errorLogger);
app.use(errorHandler);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
	console.log(`CORS-enabled web server running on port ${PORT}.`);
});
