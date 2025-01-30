import {
    Link,
    Outlet
} from "react-router-dom";
import Footer
    from "./Footer.tsx";

const Navigation = () => {

    return <>
        <nav>
            <Link to="/about" >About</Link>
            <Link to="/projects" >Projects</Link>
        </nav>
        <Outlet />
        <Footer />
    </>
}
export default Navigation