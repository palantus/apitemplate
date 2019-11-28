let config = require('./config');
let express = require('express');

async function startServer() {
  const app = express();

  (await require('./loaders'))({ expressApp: app });

  app.listen(config.port, err => {
    if (err) {
      console.log(err);
      process.exit(1);
      return;
    }
    console.log(`
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️ 
      ################################################
    `);
  });
}

startServer();