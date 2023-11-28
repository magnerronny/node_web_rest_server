import express, { Router } from 'express';
import path from 'path';

interface Options {
  port: number;
  routes:Router;
  public_path?: string;
}

export class Server {
  private app = express();
  private readonly port: number;
  private readonly public_path: string;
  private readonly route: Router;

  constructor(options:Options) {
    const { port, public_path = 'public', routes } = options;
    this.port  = port;
    this.public_path = public_path;
    this.route = routes;
  }

  async start(){

    //* Middlewares
    this.app.use(express.urlencoded({"extended":true}));
    this.app.use(express.json())
    
    //* Public Folder
    this.app.use(express.static(this.public_path))
    //* ROUTES
    this.app.use(this.route);
    this.app.get('/cambios', (req, res)=> {
      res.json({todos: 'generara ambagr'})
    })
    this.app.get('*', (req, res) => {
      res.sendFile(path.join( __dirname + `../../../${this.public_path}/index.html`));
    })

    this.app.listen(this.port, () => {
      console.log('server listenig')
    })
  }

}