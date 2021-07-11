import React, { useState } from 'react';

function LoginForm({Login, error }) {
    const [details, setDetails] = useState({ login: "", password: "" });

    const submitHandler = e => {
        e.preventDefault();

      
        Login(details);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {(error != "") ? (<div className="error">{error}</div>) : ""}
            </div>

            <div>
                <label htmlFor="login">Login: </label>
                <input type="text" name="login" id="login" onChange={e => setDetails({...details, login: e.target.value})} value={details.login}></input>
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}></input>
            </div>
            <input type="submit" value="Login" />

        </form>

    )
}

export default LoginForm;