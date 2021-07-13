import React from 'react';
import Header from './Header';
import ToDoItem from './ToDoItem';

class ToDoList extends React.Component {

    state = {
        elements: [
            {
                id: 1,
                text: 'Zrobić projekt z JS',
                completed: true
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

    deleteElement(id) {
        const newElements = this.state.elements.filter(x => !(x.id == id))
        this.setState({ elements: newElements })
    }


    render() {
        const elements = this.state.elements.map(e => {
            return <ToDoItem data={e} markClicked={this.deleteElement.bind(this)}/>
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
