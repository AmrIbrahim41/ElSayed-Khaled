import './Home.css';
import userImage from '../../Media/Pics/userImage.png';
import Cv_btn from '../../components/Second_Btn/Cv_btn';
import { socialLinks } from '../../Links/Links';

const Home = () => {
    return (
        <section className="home-section" id="home">
            {/* Left Side: Content */}
            <div className="home-content">
                <div className="intro-text">
                    <h3>Hi I am</h3>
                    <p>ElSayed Khaled</p> {/* يمكنك تغيير الاسم هنا */}
                </div>

                <h1 className="title-job">Business Analyst | Product Owner</h1> {/* يمكنك تغيير المسمى الوظيفي هنا */}
                <h2 className="Second-title-job"></h2>

                {/* --- Social Icons--- */}
                <div className="social-icons">
                    {socialLinks.map((Social) => (
                        <a key={Social.id}  href={Social.url} className={Social.className} target="_blank" rel="noopener noreferrer"><i className={Social.icon}> </i> </a>
                    ))}
                </div>

                <div className="cta-buttons">
                    <a href="tel:+201020774553"><button className="btn-primary">Hire Me</button></a>
                    {/*<Download CV button*/}
                    <Cv_btn />
                </div>

                <div className="stats">
                    <div className="stat-item">
                        <span className="stat-number">+2</span>
                        <span className="stat-label">Years Experience</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">10+</span>
                        <span className="stat-label">Projects Completed</span>
                    </div>
                    {/* <div className="stat-item">
                        <span className="stat-number">45+</span>
                        <span className="stat-label"></span>
                    </div> */}
                </div>
            </div>

            {/* Right Side: Image */}
            <div className="home-image">
                <div className="image-background-circle">
                    <img src={userImage} alt="User Image" />
                </div>
            </div>
        </section>
    );
}

export default Home;