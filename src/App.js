import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import HomeUI from "./components/Home/HomeUI";
import Notes from "./components/Notes/Notes";

import Home from "./components/Home";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import { auth } from "./firebase/firebase";
import Achivements from "./components/Achivements/Achivements";
import { About } from "./components/About/About";
function App() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
      console.log(user);
    });
  });
  return (
    <div className="App">
      <div>
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/HomeUI" element={<HomeUI />} />
          <Route path="/Notes" element={<Notes />} />
          <Route path="/Achivements" element={<Achivements/>}/>
          <Route path="/About" element={<About/>}/>
        </Routes>
      </div>
      {/* <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/HomeUI" element={<HomeUI />} />
        </Routes>
        </div> */}
    </div>
  );
}

export default App;
