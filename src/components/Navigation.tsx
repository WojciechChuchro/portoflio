import {
    Link,
    Outlet
} from "react-router-dom";

const Navigation = () => {

    return <>
        <nav>
            <Link to="/" >Home</Link>
            <Link to="/about" >About</Link>
            <Link to="/projects" >Projects</Link>
            <Link to="/contact" >Contact</Link>
        </nav>
        <Outlet />
    </>
}
export default Navigation