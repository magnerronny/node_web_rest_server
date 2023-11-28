import { Request, Response } from "express";

let todos = [
  {id: 1, text:'milk', completedAt: new Date()},
  {id: 2, text:'cheese', completedAt:null},
  {id: 3, text:'butter', completedAt: new Date()},
 ]

interface dataBody {
  id: number,
  text: string,
  description: string
}

export class TodoController {

  constructor(){}

  public getTodos = (req:Request, res:Response) => {
   res.json(todos)
  }

  public getTodosById = (req:Request, res:Response) => {
    const id = +req.params.id;
    if(isNaN(id)) res.status(400).json({error: 'Id argument is not a number'});

    const data = todos.find(item => item.id === id);
    return (!data) ? res.status(404).json({error:'id not exits'}) : res.json(data);
  }

  public createTodos = (req:Request, res:Response) => {
    const {text} = req.body;
    if (!text) return res.status(400).json({error: 'Text property is required'});
    const newTodo = {
      id: todos.length+1,
      text,
      completedAt: null
    }
    todos.push(newTodo)

    return res.status(201).json(newTodo);
  }

  public updateTodos = (req:Request, res:Response) => {
    const id = +req.params.id;
    if(isNaN(id)) return res.status(400).json({error: 'Id argument not is a number'})

    const todo = todos.find(item => item.id === id);
    if(!todo) return res.status(404).json({error: `Todo  with id ${id} not found`})

    const {text, completedAt} = req.body;
    todo.text = text || todo.text;
    (completedAt === 'null')
      ? todo.completedAt = null
      : todo.completedAt = new Date( completedAt || todo.completedAt );
  }

  public deleteTodos = (req: Request, res: Response) => {
    const id = +req.params.id;
    if(isNaN(id)) return res.status(400).json({error: 'Id argument not is a number'})

    const todo = todos.find(item => item.id === id);
    if(!todo) return res.status(404).json({error: `Todo  with id ${id} not found`})

    todos = todos.filter(item => item.id !== id)

    res.json({data: 'se elimino correctamente'})
    // res.json(result)
  }
}
