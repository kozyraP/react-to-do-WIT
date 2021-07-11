import React, { useState } from 'react';
import LoginForm from './components/LoginForm';

function App() {
    const adminUser = {
      login: "admin@gmail.com",
      password: "admin1234"
    }

    const[user, setUser] = useState({login: "", password: ""});
    const[error, setError] = useState("");

    const Login = details => {
      console.log(details);
    }

    const Logout = () => {
      console.log("Logout");
    }

  return (
    <div className="App">
      {(user.login != "") ? (
      <div className="welcome">
        <h2>Welcome, <span>{user.login}</span></h2>
        <button>Logout</button>
      </div>  
      ) : (
        <LoginForm />
      )
    }
    </div>
  );
}

export default App;
