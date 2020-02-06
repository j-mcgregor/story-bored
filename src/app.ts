import express from 'express';
import compression from 'compression'; // compresses requests
import session from 'express-session';
import bodyParser from 'body-parser';
import lusca from 'lusca';
import mongo from 'connect-mongo';
import mongoose from 'mongoose';
import bluebird from 'bluebird';
import { MONGODB_URI, SESSION_SECRET } from './util/secrets';

const MongoStore = mongo(session);

// Controllers (route handlers)
import * as rootController from './controllers/root';
import * as storyController from './controllers/story';
import * as apiController from './controllers/api';

const init = () => {
  // Create Express server
  const app = express();

  // Connect to MongoDB
  const mongoUrl = MONGODB_URI;
  mongoose.Promise = bluebird;

  mongoose
    .connect(mongoUrl, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true
    })
    .then(() => {
      /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
      console.log('MongoDB connected');
    })
    .catch(err => {
      console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
      // process.exit();
    });

  // Express configuration
  app.set('port', process.env.PORT || 3000);
  app.use(compression());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(
    session({
      resave: true,
      saveUninitialized: true,
      secret: SESSION_SECRET,
      store: new MongoStore({
        url: mongoUrl,
        autoReconnect: true
      })
    })
  );

  app.use(lusca.xframe('SAMEORIGIN'));
  app.use(lusca.xssProtection(true));
  app.use((req, res, next) => {
    res.locals.user = req.user;
    next();
  });

  /**
   * @model HOME (ROOT)
   */

  app.get('/', rootController.index);

  /**
   * @model API
   */

  app.get('/api', apiController.getApi);

  /**
   * @model STORY
   */

  app.get('/api/story/prompts', storyController.getPrompts);
  app.get('/api/story/analyse', storyController.categorisePrompts);
  app.post('/api/story/create', storyController.generateStructure);

  return app;
};

export default init;
