const server = require('./api/server');

const port =  process.env.PORT || 999;

server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));