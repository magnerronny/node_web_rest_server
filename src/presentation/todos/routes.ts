import {Router} from 'express'
import { TodoController } from './controller';

export class TodoRoutes {

  static get route(): Router {

    const router = Router();
    const todoController = new TodoController();
    
    router.get('/', todoController.getTodos);
    router.get('/:id', todoController.getTodosById);
    router.post('/', todoController.createTodos);
    router.put('/:id', todoController.updateTodos);
    router.delete('/:id', todoController.deleteTodos);

    return router;
  }

}