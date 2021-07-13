import React from 'react';

export default function ToDoItem(props) {
    const { data } = props;
    const [checked, setChecked] = React.useState(true);
    return (
        <li className="ui-state-default">
            <div className="checkbox">
                <label>
                    <input type="checkbox"
                    id={data.id} 
                    defaultChecked={data.completed}
                    onChange={() => setChecked(!checked)} />
                    {data.text}
                </label>
                <button onClick={() => props.markClicked(data.id)}>Usuń</button>
            </div>
        </li>
    );
}
