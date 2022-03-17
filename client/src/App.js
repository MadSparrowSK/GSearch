import './App.css';
import './App.css';
import './assets/fonts/fonts.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";


import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Routing from "./components/Routing";

function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routing/>
            <Footer/>
        </BrowserRouter>
    );
}
/*
<div>
    <Header/>
    <PostsPage />
    <Footer />
</div>*/

export default App;
