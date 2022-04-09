import React,{useState,useContext} from 'react';
import {FirebaseContext} from '../../store/Context'
import {Firebase} from "../../firebase/config"
import {useNavigate,Navigate,Link,useHistory} from 'react-router-dom'



import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const history = useHistory()

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    Firebase
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .then((userCredential) => {
        alert("Logged in successfully");
        history.push("/")

        
      })
      .catch((error) => {
        var errorCode = error.code;
        alert(errorCode)
        var errorMessage = error.message;
        alert(errorMessage)
        // ..
      });


  }


  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value) }
            id="fname"
            name="email"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value) }
            id="lname"
            name="password"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
