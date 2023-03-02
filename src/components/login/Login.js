import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import Inputcontroll from '../inputcontroll/Inputcontroll';
import { auth } from "../../firebase/firebase";
import { Link, useNavigate } from "react-router-dom";
import '../../main.css';

function Login() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
      email: "",
      pass: "",
    });
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  
    const handleSubmission = () => {
      if (!values.email || !values.pass) {
        setErrorMsg("Fill all fields");
        return;
      }
      setErrorMsg("");
  
      setSubmitButtonDisabled(true);
      signInWithEmailAndPassword(auth, values.email, values.pass)
        .then(async (res) => {
          setSubmitButtonDisabled(false);
          
          navigate("/HomeUI");
        })
        .catch((err) => {
          setSubmitButtonDisabled(false);
          setErrorMsg(err.message);
        });
    };
    return (
      <div className="containerr">
        <div className="innerbox">
          <h1 className="heading">Login</h1>
  
          <Inputcontroll
            label="Email"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
            placeholder="Enter email address"
          />
          <Inputcontroll
            label="Password"
            type="password"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, pass: event.target.value }))
            }
            placeholder="Enter Password"
          />
  
          <div className="footer">
            <b className="error">{errorMsg}</b>
            <button disabled={submitButtonDisabled} onClick={handleSubmission}>
              Login
            </button>
            <p>
              Already have an account?{" "}
              <span>
                <Link to="/signup">Sign up</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }


export default Login;
