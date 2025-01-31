import image from '../assets/image.jpg'
const About = ()=> {
    return <div className="container_about">
        <div className="about_here">
            <div>
                <h1>Wojciech Chuchro</h1>
            </div>
            <div>
                <img src={image} alt="My image"/>
            </div>

        </div>
        <p>Hello! I'm a passionate <strong>Software Developer</strong> who loves coding, problem-solving, and continuous self-improvement. Technology is more than just a career for me—it's a lifelong journey of learning and innovation.</p>

        <p>I thrive on expanding my skill set across multiple domains in <strong>IT</strong>, constantly exploring new technologies, frameworks, and best practices. From web development to backend engineering, cloud computing, and beyond, I enjoy tackling challenges that push me to grow.</p>

        <p>When I'm not coding, you'll find me diving into enhancing my knowledge, and staying up-to-date with the ever-evolving tech landscape. I believe in writing clean, efficient, and scalable code that makes a difference.</p>

        <p>Let's connect and build something amazing together!</p>
    </div>
}

export default About