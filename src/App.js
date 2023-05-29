import GlobalStyle from "./styles/GlobalStyle";
import styled from 'styled-components';
import { Routes, BrowserRouter, Route } from "react-router-dom";
import React from "react";
import UserContext from "./contexts/UseContext";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import AddPost from "./components/AddPost";
import Profile from "./components/Profile";
import User from "./components/User";

function App() {
  
  const [userData, setUserData] = React.useState({})
  const [user2Data, setUser2Data] = React.useState({})

  return (
    <BrowserRouter>
    <UserContext.Provider value={{ userData, setUserData, user2Data, setUser2Data}}>
      <GlobalStyle/>
      <Global>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addPost" element={<AddPost />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </Global>
    </UserContext.Provider>
  </BrowserRouter>
  );
}

export default App;

const Global = styled.div`

  width: 375px;

`