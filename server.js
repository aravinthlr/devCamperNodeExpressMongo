const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan')
const colors = require('colors');
const connectDB = require('./config/db')
const errorHandler = require('./middleware/error');


dotenv.config({path: './config/config.env'});

//database Connection
connectDB();

//import routes
const bootcamps = require('./routes/bootcamps')

const app = express();

//body parser
app.use(express.json());
const PORT = process.env.PORT || 6000;

//dev middleWare
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

//mount routes
app.use('/api/v1/bootcamps',bootcamps);
app.use(errorHandler);
//start server
const server = app.listen(PORT,() => {console.log(`server running on ${process.env.NODE_ENV} at ${PORT}`.blue.bold)});

//kill server on unhandled rejection
process.on("unhandledRejection",(err, promise) => {
    console.log(err.message.red.bold);
    server.close(() => process.exit(1));
})