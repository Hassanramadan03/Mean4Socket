const express = require('express');
const path = require('path');

class Server {
    public app: any;
    private port = 9090;
  
    public static bootstrap(): Server {
      return new Server();
    }
  
    constructor() {
      // Create expressjs application
      this.app = express();
      // Create api call
      this.app.get('/api', (req, res) => res.json({ application: 'Reibo collection'}));
      // Redirect / to our html file
      this.app.get('/', (req, res) =>  res.sendFile(path.resolve('dist/index.html')));
      // Define the port
      this.app.listen(this.port, () => console.log(`http is started ${this.port}`));
    }
  }
  
  //Bootstrap the server, so it is actualy started
  const server = Server.bootstrap();
  export default server.app;