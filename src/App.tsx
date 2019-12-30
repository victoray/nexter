import React from 'react';
import Header from "./components/Header";
import './App.css';
import SideBar from "./components/Sidebar";
import Realtors from "./components/Realtors";
import Story from "./components/Story";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Homes from "./components/Homes";
import Features from "./components/Features";

const App: React.FC = () => {
    return (
        <div className={"container"}>
            <SideBar/>
            <Header/>
            <Features/>
            <Realtors/>
            <Story/>
            <Homes/>
            <Gallery/>
            <Footer/>
        </div>
    );
};

export default App;
