import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareTwitter, faSquareGithub } from '@fortawesome/free-brands-svg-icons'; 
import TechSkills from './TechSkills';

const About = ( {data} ) => {
 
    return (
        <>
            <section id="about">
                    <h2 className="sub-heading-text">{data.title.rendered}</h2>
                    <section className='about-content'>
                    <section className="about-text" dangerouslySetInnerHTML={{__html:data.acf.about_me_text.replace(/(?:\r\n|\r|\n)/g, '<br>')}}>
                    </section>
                    <ul className='social-links'>
                        <li><a href="https://www.linkedin.com/in/jonny-nguyen-56a124252/"><FontAwesomeIcon className='linkedin' icon={faLinkedin}/></a></li>
                        <li><a href="https://github.com/Joonald"><FontAwesomeIcon className='github' icon={faSquareGithub}/></a></li>
                        <li><a href="https://twitter.com/JonnyPNguyen"><FontAwesomeIcon className='twitter' icon={faSquareTwitter}/></a></li>
                    </ul>
                    </section>
                    <TechSkills />
            </section>
        </>
    );
};

export default About;
