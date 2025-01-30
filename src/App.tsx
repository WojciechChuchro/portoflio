import './App.css'
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import Navigation
    from "./components/Navigation.tsx";
import Home
    from "./pages/Home.tsx";
import About
    from "./pages/About.tsx";
import Projects
    from "./pages/Projects.tsx";
import Contact
    from "./pages/Contact.tsx";

const App = () =>{
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Route>
        </Routes>
    </BrowserRouter>
    )
}

export default App
