import express from 'express';
import  TodoService from '../services/todo.service';
import { TodoDto } from './../dtos';
import { CustomRequest } from '../middleware/jwt';
class TodoController {
    async getAll(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            const userId = (req as CustomRequest).userId;
            const todos: TodoDto[] = await TodoService.getAll(userId);
            
            res.status(200).json({ todos, isOperationSuccess: true });
        } catch (error) {
            next(error);
        }
    }

    async get(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            const userId = (req as CustomRequest).userId;
            const todoId = req.params.id;
            const todo: TodoDto = await TodoService.get(userId, todoId);

            res.status(200).json({ todo, isOperationSuccess: true });
        } catch (error) {
            next(error);
        }
    }

    async create(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            const userId = (req as CustomRequest).userId;
            const { title } = req.body as { title: string }; 
            const createdTodo: TodoDto = await TodoService.create(userId, title);

            res.status(200).json({ todo: createdTodo, isOperationSuccess: true });
        } catch (error) {
            next(error);
        }
    }

    async update(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            const userId = (req as CustomRequest).userId;
            const todoId = req.params.id;
            const todo = req.body as { title: string, isDone: boolean };
            const updateTodo: TodoDto = await TodoService.update(userId, todoId, todo);

            res.status(200).json({ updateTodo, isOperationSuccess: true });
        } catch(error) {
            next(error);
        }
    }

    async completeSelected(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            const userId = (req as CustomRequest).userId;
            const { ids } = req.body as { ids: string[] } 
            await TodoService.completeSelected(userId, ids);

            res.status(200).json({ isOperationSuccess: true });
        } catch (error) {
            next(error);
        }
    }

    async delete(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            const userId = (req as CustomRequest).userId;
            const todoId = req.params.id;
            await TodoService.delete(userId, todoId);

            res.status(200).json({ isOperationSuccess: true });
        } catch (error) {
            next(error);
        }
    }

    async deleteSelected(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            const userId = (req as CustomRequest).userId;
            const { ids } = req.body as { ids: string[] } 
            await TodoService.deleteSelected(userId, ids);

            res.status(200).json({ isOperationSuccess: true });
        } catch (error) {
            next(error);
        }
    }
}

export default new TodoController();