import React from 'react';
import TodoList from './components/TodoList';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello world!</div>,
    },
]);

const App: React.FC = () => {
    return (
        <div>
            <TodoList/>
        </div>
    );
};

export default App;
