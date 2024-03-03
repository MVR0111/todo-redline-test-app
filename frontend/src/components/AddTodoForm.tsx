// src/components/AddTodoForm.tsx
import React, { useState } from 'react';

interface AddTodoFormProps {
    addTodo: (text: string) => void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim() !== '') {
            addTodo(text);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add a new todo"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTodoForm;
