import Github
    from "../icons/Github.tsx";
import Linkedin
    from "../icons/Linkedin.tsx";

const Footer = () => {
    return <footer className="footer">
        <div className="container_footer">
            <div>© 2024 Wojciech Chuchro</div>
            <Linkedin />
            <Github url="https://github.com/WojciechChuchro/RideMate"/>
        </div>
    </footer>
}

export default Footer
