import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "../components/Login/Login"
import MainPage from '../components/MainPage/MainPage';
import Profile from '../components/Profile/Profile.jsx';
import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/feed" element={<MainPage />}/>
                <Route path="/profile/:userId" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;