import React, { useState } from 'react';
import LoginForm from './components/LoginForm';

function App() {
    const adminUser = {
      login: "admin",
      password: "admin"
    }

    const[user, setUser] = useState({login: "", password: ""});
    const[error, setError] = useState("");

    const Login = details => {

      if(details.login == adminUser.login && details.password == adminUser.password){
        console.log('logged in')
        setUser({
          login: details.login,
          password: details.password
        })
    }
    else {
      setError("Wrong password!")
    }
  
    }

    const Logout = () => {
      setUser({
        login: "",
          password: ""
      })
    }

  return (
    <div className="App">
      {(user.login != "") ? (
      <div className="welcome">
        <h2>Welcome, <span>{user.login}</span></h2>
        <button onClick={Logout}>Logout</button>
      </div>  
      ) : (
        <LoginForm Login={Login} error={error} />
      )
    }
    </div>
  );
}

export default App;
