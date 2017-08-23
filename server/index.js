import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import session from 'express-session';
import morgan from 'morgan';
import bluebird from 'bluebird';
import breadcrumbs from 'express-breadcrumbs';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';

import config from './config/index';
import authRouter from './routes/auth';
import userRouter from './routes/user';
import newsRouter from './routes/news';
import addonsRouter from './routes/addons';

import errorHandler from './middlewares/errorHandler';
import checkToken from './middlewares/checkToken';
import getUser from './middlewares/getUser';

const app = express();
const compiler = webpack(webpackConfig);


mongoose.Promise = bluebird;
mongoose.connect(config.database, err => {
    if (err) {
        throw err
    }

    console.log('mongo connected');
});

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: config.secret
}));
app.use(breadcrumbs.init());
app.use(cors({origin: '*'}));

app.use('/api', authRouter);
app.use('/api', checkToken, userRouter);
app.use('/api', checkToken, newsRouter);
app.use('/api', checkToken, addonsRouter);
// app.use(getUser);

app.use(webpackMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
}));
app.use(webpackHotMiddleware(compiler));

app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(config.port, ()=> console.log(`Server is up and running on port ${config.port}`));

app.use(errorHandler);