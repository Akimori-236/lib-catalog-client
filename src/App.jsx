import React, { useState } from "react";
import "./App.css";
import MyNavBar from "./components/MyNavBar";
import Listing from "./components/Listing";

function App() {
    return (
        <div className="container">
            <MyNavBar />
            <Listing />
        </div>
    );
}

export default App;
