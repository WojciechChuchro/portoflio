import {Link} from "react-router-dom";

const Projects = () => {
    return <div className="container container_portfolio">
        <Link to="/projects/ride-sharing-platform">Ride Sharing Platform</Link>
        <Link to="/projects/tower-defence">Tower Defence</Link>
    </div>
}

export default Projects;