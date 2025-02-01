import {
    Link,
    Outlet,
    useLocation
} from "react-router-dom";
import Footer
    from "./Footer.tsx";
import DarkModeToggle from "./DarkModeToggle.tsx";
import {useEffect, useState} from "react";
// import {useState} from "react";

const Navigation = () => {
    const location = useLocation()
    const [isDark, setIsDark] = useState(true)
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    }, [isDark]);
    return <div className="container">
        <nav>
            <Link className={location.pathname === '/about' ? 'selected' : ''} to="/about" >About</Link>
            <Link className={location.pathname === '/projects' ? 'selected' : ''} to="/projects" >Projects</Link>
            <DarkModeToggle isDark={isDark} onChange={() => {setIsDark(!isDark)}}/>
        </nav>
        <Outlet />
        <Footer />
    </div>
}
export default Navigation