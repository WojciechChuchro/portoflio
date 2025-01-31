import Github from "../icons/Github.tsx";
import Back from "../icons/Back.tsx";

const RideSharingPlatform = () => {
    return (
        <article className="thesis-project">
            <div className="header__projects">
                <Back />
                <h1>Ride Sharing Platform</h1>
                <Github url="https://github.com/WojciechChuchro/RideMate" />
            </div>

            <section className="project-overview">
                <h2>Project Overview</h2>
                <p>
                    Developed as part of my engineering thesis, this application reimagines ride-sharing solutions by creating
                    a platform that connects drivers with passengers. The platform facilitates cost-effective travel while
                    promoting environmental sustainability through shared transportation.
                </p>
            </section>

            <section className="key-features">
                <h2>Key Features</h2>
                <ul>
                    <li>User and driver registration system with role-based access</li>
                    <li>Advanced ride search and booking functionality</li>
                    <li>Real-time ride availability tracking</li>
                    <li>Secure payment integration and cost-sharing calculations</li>
                    <li>User rating and review system</li>
                </ul>
            </section>

            <section className="technical-stack">
                <h2>Technical Implementation</h2>

                <div className="frontend">
                    <h3>Frontend</h3>
                    <p>
                        Built with Angular, delivering a responsive and intuitive user interface that adapts
                        seamlessly across devices. Implements modern UI/UX principles for enhanced user engagement.
                    </p>
                </div>

                <div className="backend">
                    <h3>Backend</h3>
                    <p>
                        Powered by Express.js, providing robust API management and efficient request handling.
                        The backend architecture ensures scalability and maintainable code structure.
                    </p>
                </div>

                <div className="security">
                    <h3>Security</h3>
                    <p>
                        Implements JWT (JSON Web Tokens) for secure authentication and authorization,
                        ensuring protected user data and safe access control across the platform.
                    </p>
                </div>

                <div className="database">
                    <h3>Database Management</h3>
                    <p>
                        Utilizes Objection.js with Knex as ORM, providing elegant database operations
                        and maintaining data integrity through efficient object-relational mapping.
                    </p>
                </div>
            </section>

            <section className="project-benefits">
                <h2>Project Benefits</h2>
                <p>
                    This solution not only provides a practical platform for ride-sharing but also
                    demonstrates technical excellence through:
                </p>
                <ul>
                    <li>High-performance architecture ensuring quick response times</li>
                    <li>Robust security measures protecting user data and transactions</li>
                    <li>Scalable design allowing for future feature additions</li>
                    <li>User-centric interface promoting high engagement and satisfaction</li>
                </ul>
            </section>
        </article>
    )
}
export default RideSharingPlatform