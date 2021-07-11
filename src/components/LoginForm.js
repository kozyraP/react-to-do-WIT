import React from 'react';

function LoginForm() {
    return (
        <form>
            <div className="form-inner">
                <h2>Login</h2>
            </div>

            <div>
                <label htmlFor="login">Name:</label>
                <input type="text" name="login" id="login"></input>
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password"></input>
            </div>

        </form>

    )
}

export default LoginForm;