import {Router} from 'express'
import { TodoRoutes } from './todos/routes';

export class AppRouter {
  
  static get routes(): Router {
    const router = Router();
    
    // router.get('/api/todos', (req, res)=> {
    //   res.json({'appps': 'pesssssssss'})
    // });
    router.use('/api/todos', TodoRoutes.route);

    return router;
  }

}