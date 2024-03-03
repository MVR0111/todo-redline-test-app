const API_BASE_URL = 'http://localhost:80/api'; // Замените на ваш URL

export interface Todo {
    id: number;
    text: string;
}

const api = {
    getTodos: async (): Promise<Todo[]> => {
        const response = await fetch(`${API_BASE_URL}/todos`);
        const data = await response.json();
        return data.data;
    },

    addTodo: async (text: string): Promise<Todo> => {
        const response = await fetch(`${API_BASE_URL}/todos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text }),
        });
        const data = await response.json();
        return data.data;
    },

    removeTodo: async (id: number): Promise<void> => {
        await fetch(`${API_BASE_URL}/todos/${id}`, {
            method: 'DELETE',
        });
    },
};

export default api;
