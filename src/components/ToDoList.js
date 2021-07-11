import React from 'react';
import Header from './Header';
import ToDoItem from './ToDoItem';

function ToDoList(props) {
    const {title, items} = props;

    return (
        <div className="todolist">
            <Header title={title} />

            <ul className="list-unstyled">
                {items.map(item => <ToDoItem key={item.id} data={item}/>)}
            </ul>
        </div>
    );
}

export default ToDoList;
