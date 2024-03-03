import React from 'react';

interface TodoItemProps {
    todo: { id: number; text: string };
    removeTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, removeTodo }) => {
    return (
        <div>
            <span>{todo.text}</span>
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
        </div>
    );
};

export default TodoItem;
