import React from "react";
import { useState } from "react";
import Inputcontroll from '../inputcontroll/Inputcontroll';
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import '../../main.css';

  function Signup() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
      name: "",
      email: "",
      pass: "",
    });
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  
    const handleSubmission = () => {
      if (!values.name || !values.email || !values.pass) {
        setErrorMsg("Fill all fields");
        return;
      }
      setErrorMsg("");
  
      setSubmitButtonDisabled(true);
      createUserWithEmailAndPassword(auth, values.email, values.pass)
        .then(async (res) => {
          setSubmitButtonDisabled(false);
          const user = res.user;
          await updateProfile(user, {
            displayName: values.name,
          });
          navigate("/");
        })
        .catch((err) => {
          setSubmitButtonDisabled(false);
          setErrorMsg(err.message);
        });
    };
  
    return (
      <div className="containerr">
        <div className="innerbox">
          <h1 className="heading">Signup</h1>
  
          <Inputcontroll
            label="Name"
            placeholder="Enter your name"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, name: event.target.value }))
            }
          />
          <Inputcontroll
            label="Email"
            placeholder="Enter email address"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, email: event.target.value }))
            }
          />
          <Inputcontroll
            label="Password"
            type="password"
            placeholder="Enter password"
            onChange={(event) =>
              setValues((prev) => ({ ...prev, pass: event.target.value }))
            }
          />
  
          <div className="footer">
            <b className="error">{errorMsg}</b>
            <button onClick={handleSubmission} disabled={submitButtonDisabled}>
              Signup
            </button>
            <p>
              Already have an account?{" "}
              <span>
                <Link to="/login">Login</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Signup;