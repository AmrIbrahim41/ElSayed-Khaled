import './About.css';

// Make sure the image paths are correct
import userImage from '../../Media/Pics/userImage.png'; // <--- غيّر اسم صورتك هنا
import List from '../../Skill_List/List';
import Cv_btn from '../../components/Second_Btn/Cv_btn';

const About = () => {
    return (
        <>
            {/* About Me Section */}
            <section className="about-section" id="about">
                {/* Image Container */}
                <div className="about-image">
                    <div className="about-image-background-circle">
                        <img src={userImage} alt="Ahmed Tarek S" />
                    </div>
                </div>

                {/* Content Container */}
                <div className="about-content">
                    <h1>About Me</h1>
                    <p>
                        I am a Business Analyst with 2 years of experience at AHCC Inc. (Future Smart Solution),
                        where I contributed to ERP systems, smart city platforms, logistics, and facility
                        management projects. Skilled in SDLC, SQL, Power BI, and Figma, I specialize in requirement
                        gathering, workflow optimization, and UAT to deliver efficient, data-driven solutions.

                        I have worked closely with cross-functional teams to bridge the gap between business needs and
                        technical implementation, ensuring clarity and alignment at every stage. With a strong focus on
                        communication and problem-solving, I aim to deliver solutions that enhance efficiency, support decision-making,
                        and create long-term business value.
                    </p>

                    <Cv_btn />
                </div>
            </section>

            {/* My Skills Section */}
            <section className="skills-section">

                {/* <h2>My Skills</h2>
                <p>Here are some of my skills where I've earned knowledge into expertise.</p> */}


                {/* Skill Circle Component */}
                <div className="skills-container">

                </div>


                {/* Skills List Component */}
                <List />
            </section>
        </>
    );
}

export default About;