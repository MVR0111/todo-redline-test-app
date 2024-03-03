// src/components/TodoList.tsx
import React, { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';
import api from '../services/api';
import { Todo } from '../services/api';

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        api.getTodos().then((data) => setTodos(data));
    }, []);

    const addTodo = (text: string) => {
        api.addTodo(text).then((newTodo) => setTodos([...todos, newTodo]));
    };

    const removeTodo = (id: number) => {
        api.removeTodo(id).then(() => setTodos(todos.filter((todo) => todo.id !== id)));
    };

    return (
        <div>
            <h2>Todo List</h2>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
            ))}
            <AddTodoForm addTodo={addTodo} />
        </div>
    );
};

export default TodoList;
