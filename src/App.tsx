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
import RideSharingPlatform from "./pages/RideSharingPlatform.tsx";
import TowerDefence from "./pages/TowerDefence.tsx";

const App = () =>{
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route path="/" element={<About />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/ride-sharing-platform" element={<RideSharingPlatform />} />
                <Route path="/projects/tower-defence" element={<TowerDefence />} />
            </Route>
        </Routes>
    </BrowserRouter>
    )
}

export default App
