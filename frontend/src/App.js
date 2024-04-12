import {
    // createBrowserRouter,
    // RouterProvider,
    Route,
    Routes,
    // Link,
    BrowserRouter,
    // Form,
} from "react-router-dom";

import './App.css';
import { Banner } from "./pages/Banner";
import { NavBar } from "./pages/Navbar";
import Compare from "./pages/Compare";
import Form from "./pages/Form";
import More from "./pages/More";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Banner/>
            <Compare/>
            <Form/>
            <More/>
        </div>
    );
}

export default App;
