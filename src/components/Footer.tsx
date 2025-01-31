import Github
    from "./Github.tsx";
import Linkedin
    from "./Linkedin.tsx";

const Footer = () => {
    return <div className="footer">
        <div className="container_footer">
            <div>© 2024 Wojciech Chuchro</div>
            <Linkedin />
            <Github />
        </div>
    </div>
}

export default Footer
