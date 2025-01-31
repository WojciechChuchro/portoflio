import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import Navigation
    from "./components/Navigation.tsx";
import About
    from "./pages/About.tsx";
import Projects
    from "./pages/Projects.tsx";

const App = () =>{
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route path="/" element={<About />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
            </Route>
        </Routes>
    </BrowserRouter>
    )
}

export default App
