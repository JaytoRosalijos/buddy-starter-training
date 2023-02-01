import { firestoreDatabase } from '../config/firestore';
import { TodoDto } from '../dtos';

class TodoService {
    async getAll(userId: string,): Promise<TodoDto[]> {
        const todos: TodoDto[] = [];
        const document = firestoreDatabase.collection("users").doc(userId)
        const snapshot = await document.collection("todos").orderBy("isDone", "desc").get();
        snapshot.forEach((doc) => {
            todos.push({ id: doc.id, title: doc.data().title, isDone: doc.data().isDone })
        })
        
        return todos;
    }

    async get(userId: string, todoId: string): Promise<TodoDto> {
        const snapshot = await firestoreDatabase.collection("users")
            .doc(userId)
            .collection("todos")
            .doc(todoId)
            .get();
        const todo = snapshot.data() as TodoDto;
     
        return { ...todo, id: todoId };
    }

    async create(userId: string, title: string): Promise<TodoDto>  {
        const snapshot = await firestoreDatabase.collection("users")
            .doc(userId)
            .collection("todos")
            .add({title, isDone: false });

        return { id: snapshot.id, title, isDone: false };
    }

    async update(userId: string, todoId: string, todo: { title: string, isDone: boolean }): Promise<TodoDto>  {
        await firestoreDatabase.collection("users")
            .doc(userId)
            .collection("todos")
            .doc(todoId)
            .set({ ...todo }, { merge: true });
        
        return { ...todo, id: todoId };
    }

    async completeSelected(userId: string, ids: string[]) {
        const batch = firestoreDatabase.batch();
        ids.forEach(id => {
            const todosRef = firestoreDatabase.collection("users")
                                            .doc(userId)
                                            .collection("todos")
                                            .doc(id);
            batch.set(todosRef, { isDone: true }, { merge: true});
        })
        await batch.commit();
    }

    async delete(userId: string, todoId: string) {
        await firestoreDatabase.collection("users")
            .doc(userId)
            .collection("todos")
            .doc(todoId)
            .delete();
    }

    async deleteSelected(userId: string, ids: string[]) {
        const batch = firestoreDatabase.batch();
        ids.forEach(id => {
            const todosRef = firestoreDatabase.collection("users")
                                            .doc(userId)
                                            .collection("todos")
                                            .doc(id);
            batch.delete(todosRef);
        });
        await batch.commit();
    }

    async searchTodo(userId: string, query: string): Promise<TodoDto[]> {
        const todos: TodoDto[] = [];
        
        if (!query.trim())
            return [];

        const snapshot = await firestoreDatabase.collection("users")
                        .doc(userId)
                        .collection("todos")
                        .where("title", ">=", query)
                        .where("title", "<", query + "z")
                        .orderBy("title")
                        .orderBy("isDone", "desc")
                        .get();
        
        snapshot.forEach((doc) => {
            todos.push({ id: doc.id, title: doc.data().title, isDone: doc.data().isDone })
        })
        
        return todos;
    }
}

export default new TodoService();