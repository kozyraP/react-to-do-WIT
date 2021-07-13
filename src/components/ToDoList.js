import React from 'react';
import Header from './Header';
import AddItem from './AddItem';
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
        ],
        inputValue: ''
    }

    deleteElement(id) {
        const newElements = this.state.elements.filter(x => !(x.id == id))
        this.setState({ elements: newElements })
    }

    addItem() {
        const item = {
            id: Math.random(),
            text: this.state.inputValue,
            completed: false
        }

        const newElements = [...this.state.elements, item]
        this.setState({ elements: newElements })
        this.setState({ inputValue: '' })
    }
    inputHandler(event) {
        const newValue = event.target.value
        this.setState({ inputValue: newValue })
    }


    render() {
        const elements = this.state.elements.map(e => {
            return <ToDoItem data={e} markClicked={this.deleteElement.bind(this)} />
        })
        return (
            <div className="todolist">
                <Header title={'To do'} />
                <div>
                    <input
                        type="text"
                        placeholder="Tutaj wpisz treść"
                        value={this.state.inputValue}
                        onChange={this.inputHandler.bind(this)}
                    />
                    <button onClick={this.addItem.bind(this)}>Dodaj</button>
                </div>
                <p />
                <ul className="list-unstyled">
                    {elements}
                </ul>

                <button onClick={e => (window.location.reload())}>Wyloguj</button>
            </div>
        )

    }
}
export default ToDoList
