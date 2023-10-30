import React from 'react';
import './styles.css';
import {LandingPage} from "./app/landing-page/LandingPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Albums} from "./app/albums/Albums";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="albums" element={<Albums/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
