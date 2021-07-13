import React, { useState } from 'react';

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({ login: "", password: "" });

    const submitHandler = e => {
        e.preventDefault();


        Login(details);
    }

    return (
        <section className="login">
            <div className="loginContainer">
                <form onSubmit={submitHandler}>
                    <div >
                        <h2>Zaloguj się do To Do listy</h2>
                        {(error != "") ? (<div className="error">{error}</div>) : ""}
                    </div>

                    <div>
                        <label htmlFor="login">Login:</label>
                        <input type="text" name="login" id="login" onChange={e => setDetails({ ...details, login: e.target.value })} value={details.login}></input>
                    </div>
                    <div>
                        <label htmlFor="password">Hasło: </label>
                        <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password}></input>
                    </div>
                    <p/>
                    <input type="submit" value="Login" />

                </form>
            </div>
        </section>
    )
}

export default LoginForm;