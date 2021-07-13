import React from 'react';

export default function AddItem(props) {


    return (
        <div>
            <input placeholder="Tutaj wpisz treść"
            />
            <button onClick={() => props.clickButton()}>Dodaj</button>
        </div>
    );
}
