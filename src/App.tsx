import React from 'react';
import './styles.css';
import {LandingPage} from "./app/landing-page/LandingPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from './app/common/components/Layout';
import {PhotosWrapper} from "./app/photos/PhotosWrapper";
import {AlbumsWrapper} from "./app/albums/AlbumsWrapper";


function App() {
    return (
        <Layout>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="albums" element={<AlbumsWrapper/>}/>
                    <Route path="albums/:id/photos" element={<PhotosWrapper/>}/>
                </Routes>
            </BrowserRouter>
        </Layout>
    );
}

export default App;
