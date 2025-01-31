import {
    Link,
    Outlet,
    useLocation
} from "react-router-dom";
import Footer
    from "./Footer.tsx";

const Navigation = () => {
    const location = useLocation()

    return <div className="container">
        <nav>
            <Link className={location.pathname === '/about' ? 'selected' : ''} to="/about" >About</Link>
            <Link className={location.pathname === '/projects' ? 'selected' : ''} to="/projects" >Projects</Link>
        </nav>
        <Outlet />
        <Footer />
    </div>
}
export default Navigation