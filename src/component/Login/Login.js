import React, { useState } from "react";
import './Login.css'
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      await login({ username, password });
      setIsLoggedIn(true);
    } catch (err) {
      setError("Incorrect username or password");
    } finally {
      setIsLoading(false);
    }
  };



//   const initialValues = { username: "", email: "", password: "" };
//   const [formValues, setFormValues] = useState(initialValues);
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
  
//   const handleChange = (e) => { 
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//   };
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // setIsLoading(true);
//     setFormErrors(validate(formValues));
//     setIsSubmit(true);

 
//   };

    
// const validate = (values) => {
//     const errors = {};
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//     if (!values.username) {
//         errors.username = "Username is required!";
//       } else if (values.username.length < 4) {
//         errors.username = "Username must be more than 4 characters";
//       }
//     if (!values.email) {
//       errors.email = "Email is required!";
//     } else if (!regex.test(values.email)) {
//       errors.email = "This is not a valid email format!";
//     }
//     if (!values.password) {
//       errors.password = "Password is required";
//     } else if (values.password.length < 4) {
//       errors.password = "Password must be more than 4 characters";
//     } else if (values.password.length > 10) {
//       errors.password = "Password cannot exceed more than 10 characters";
//     }
//     return errors;
//   };


  const login = async (creds) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (creds.username === "Dabi" && creds.password === "Dabi") {
          resolve();
        } else {
          reject();
        }
      }, 2000);
    });
  };
  const notify = () => toast("You are now being logged in!");
  return (
    <div className="login">
            <img
                    className="login__logo"
                    alt="logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />
    <div className="login-container">
      {isLoggedIn ? (
        // <Navigate replace to="/open" />
        <Navigate replace to="/" />
      ) : (
        <div className="login__container">
             <h1 className="h1">Sign-in</h1>
        <form onSubmit={handleSubmit}>
          <div>
          <h5 className="h5">Username</h5>
            <input
            className="input"
              type="text"
              id="username"
            //   value={formValues.username}
            // onChange={handleChange}
            name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            {/* <p className='red'>{formErrors.username}</p> */}
          </div>
          <div>
          <h5 className="h5">Password</h5>
            <input
            className="input"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // value={formValues.password}
              // onChange={handleChange}
              required
            />
             {/* <p className='red'>{formErrors.password}</p> */}
          </div>
          {/* <button type="submit" className='login__signInButton'> Logging In */}
          {error && <div className="error">{error}</div>}
          <button onClick={notify} type="submit" className='login__signInButton' disabled={isLoading}>
            {isLoading ? "Logging in..." : "Log In"}
          </button>
          <ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
        </form>
        <p className="p">
        By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
        see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
    </p>
    <button className='login__registerButton'>Create your Amazon Account</button>
   
    </div>
      )}
    </div>
    </div>
  );
}

export default Login;