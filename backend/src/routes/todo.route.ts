import express, { Router } from 'express';

import TodoController from '../controllers/todo.controller'

const todoRouter: Router = express.Router()

todoRouter.get("", TodoController.getAll);
todoRouter.get("/:id", TodoController.get);
todoRouter.post("", TodoController.create);
todoRouter.patch("/complete-selected", TodoController.completeSelected);
todoRouter.patch("/:id", TodoController.update);
todoRouter.delete("/delete-selected", TodoController.deleteSelected);
todoRouter.delete("/:id", TodoController.delete);

export { todoRouter };
