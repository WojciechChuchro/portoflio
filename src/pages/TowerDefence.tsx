import Back from "../icons/Back.tsx";
import Github from "../icons/Github.tsx";

const TowerDefenseProject = () => {
    return (
        <article className="thesis-project">
            <div className="header__projects">
                <Back />
                <h1>Tower Defense Game</h1>
                <Github url="https://github.com/WojciechChuchro/tower-defence" />
            </div>
            <section className="project-overview">
                <h2>Project Overview</h2>
                <p>
                    A classic tower defense game developed using JavaFX, where players strategically place defensive towers
                    to protect their base from incoming waves of enemies. The game features a simple yet engaging gameplay
                    mechanism with resource management and strategic planning elements.
                </p>
            </section>
            <section className="key-features">
                <h2>Key Features</h2>
                <ul>
                    <li>Interactive main menu with game start, settings, and exit options</li>
                    <li>Dynamic enemy wave system with increasing difficulty</li>
                    <li>Resource management system for tower placement and upgrades</li>
                    <li>Multiple enemy types with different movement patterns and health points</li>
                    <li>Score tracking and game progress saving functionality</li>
                </ul>
            </section>
            <section className="technical-stack">
                <h2>Technical Implementation</h2>
                <div className="frontend">
                    <h3>User Interface</h3>
                    <p>
                        Built with JavaFX, providing a responsive and interactive gaming interface with
                        smooth animations and intuitive controls. Features a clean design for both gameplay
                        and menu screens.
                    </p>
                </div>
                <div className="backend">
                    <h3>Game Logic</h3>
                    <p>
                        Implemented in Java, handling core game mechanics including enemy pathfinding,
                        tower targeting systems, and collision detection. Uses efficient algorithms for
                        game state management.
                    </p>
                </div>
                <div className="graphics">
                    <h3>Graphics Engine</h3>
                    <p>
                        Utilizes JavaFX's Canvas for rendering game elements and animations,
                        ensuring smooth gameplay performance and visual feedback.
                    </p>
                </div>
                <div className="gameplay">
                    <h3>Gameplay Systems</h3>
                    <p>
                        Features a comprehensive money system for tower purchases and upgrades,
                        wave-based enemy spawning, and player life management.
                    </p>
                </div>
            </section>
            <section className="project-benefits">
                <h2>Project Benefits</h2>
                <p>
                    This tower defense game showcases programming skills and game development
                    concepts through:
                </p>
                <ul>
                    <li>Object-oriented design principles in game development</li>
                    <li>Efficient resource management and game state handling</li>
                    <li>Interactive user interface design with JavaFX</li>
                    <li>Implementation of basic game mechanics and physics</li>
                </ul>
            </section>
        </article>
    );
};

export default TowerDefenseProject;
