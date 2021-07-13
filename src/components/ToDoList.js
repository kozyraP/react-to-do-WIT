import React from 'react';
import Header from './Header';
import ToDoItem from './ToDoItem';

class ToDoList extends React.Component {

    state = {
        elements: [
            {
                id: 1,
                text: 'Zrobić projekt z JS',
                completed: false
            },
            {
                id: 2,
                text: 'Dokończyć projekt z Clouda',
                completed: false
            },
            {
                id: 3,
                text: 'Dokończyć projekt z BI',
                completed: false
            }
        ]
    }

    render() {
        const elements = this.state.elements.map(e => {
            return <ToDoItem key={e.id} data={e} />
        })
        return (
            <div className="todolist">
                <Header title={'To do'} />

                <ul className="list-unstyled">
                    {elements}
                </ul>
            </div>
        )

    }
}
export default ToDoList
