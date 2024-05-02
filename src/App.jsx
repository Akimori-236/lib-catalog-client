import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Listing from "./components/Listing";

function App() {
    return (
        <div className="container">
            <Nav className="navbar" />
            <Listing />
        </div>
    );
}

export default App;
