import React from 'react';
import Header from "./components/Header";
import './App.css';
import SideBar from "./components/Sidebar";
import Realtors from "./components/Realtors";
import Story from "./components/Story";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Homes from "./components/Homes";

const App: React.FC = () => {
    return (
        <div className={"container"}>
            <SideBar/>
            <Header/>
            <Realtors/>
            <Story/>
            <Homes/>
            <Gallery/>
            <Footer/>
        </div>
    );
};

export default App;
