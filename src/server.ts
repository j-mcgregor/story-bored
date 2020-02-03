import errorHandler from 'errorhandler';

import app from './app';

const init = app();
/**
 * Error Handler. Provides full stack - remove for production
 */
init.use(errorHandler());

/**
 * Start Express server.
 */
const server = init.listen(init.get('port'), () => {
  console.log(
    '  App is running at http://localhost:%d in %s mode',
    init.get('port'),
    init.get('env')
  );
  console.log('  Press CTRL-C to stop\n');
});

export default server;
