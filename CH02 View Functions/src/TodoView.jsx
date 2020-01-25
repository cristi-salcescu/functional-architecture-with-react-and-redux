import React from 'react';
import TodoSearch from './TodoSearch';
import TodoList from './TodoList';

function TodoView(){
    return (
        <div>
            <TodoSearch />
            <TodoList />
        </div>
    )
}

export default TodoView;