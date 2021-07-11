import React, { useState } from 'react';
import LoginForm from './components/LoginForm';

function App() {
    const adminUser = {
      login: "admin",
      password: "admin"
    }

    let items = [
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
  ];

  let title = 'To do';

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
      <div className="container">
      <div className="row">
          <div className="todolist">
              <h1>{title.toUpperCase()}</h1>
              <ul className="list-unstyled">
                  {items.map(item => (
                      <li key={item.id} className="ui-state-default">
                          <div className="checkbox">
                              <label>
                                  <input type="checkbox" value=""/>
                                  {item.text}
                              </label>
                          </div>
                      </li>
                  ))}
              </ul>
          </div>
      </div>
  </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )
    }
    </div>
  );
}

export default App;
