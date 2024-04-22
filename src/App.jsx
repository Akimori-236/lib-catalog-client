import "./App.css";
import Listing from "./components/Listing";
import Navbar from "./components/navbar";

function App() {
    return (
        <div className="container">
            <Navbar />
            <Listing />
        </div>
    );
}

export default App;
