const server = require('./api/server.js');

const port = process.env.PORT || 5876;
server.listen(port, () => console.log(`\n** Server listening on localhost:${port} **\n`));
