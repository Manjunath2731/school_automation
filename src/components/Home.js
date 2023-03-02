import React from 'react';
import HomeUI from './Home/HomeUI';
import { NavBar } from './NavBar/NavBar';
import Notes from './Notes/Notes';
import { Route, Routes } from 'react-router-dom';
function Home(props) {
  return (
    <div>
      {/* <NavBar/>
      <Routes>
        <Route path='/HomeUI' element={<HomeUI/>}/>
        <Route path='/Notes' element={<Notes/>}/> 
      </Routes> */}
      {/* <NavBar/>
      <HomeUI/>
      <Notes/> */}

    </div>
  )
}

export default Home




      {/* <About/> */}
      {/* <div>
        <h1>
          <Link to="/login">Login</Link>
        </h1>
        <br/>
        <h1>
          <Link to="/signup">Signup</Link>
        </h1>
      </div>
      <br/>
      <br/>
      <br/>

      <h2>{props.name ? `Wellcome - ${props.name}` : "Login Please"}</h2> */}