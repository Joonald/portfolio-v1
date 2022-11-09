import { useState, useEffect } from 'react';
import Loading from '../utilities/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faSquareTwitter, faSquareGithub } from '@fortawesome/free-brands-svg-icons'; 

const About = () => {
    const restPath = 'https://jonnynguyen.com/portfolio-wp/wp-json/wp/v2/pages/37';
    const [restData, setData] = useState([]);
    const [isLoaded, setLoadStatus] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(restPath)
            if ( response.ok ) {
                const data = await response.json()
                setData(data)
                setLoadStatus(true)
            } else {
                setLoadStatus(false)
            }
        }
        fetchData()
    }, [restPath]);
    
    return (
        <>
        { isLoaded ?
            <section id="about">
                <section>
                    <h2 className="sub-heading-text">{restData.title.rendered}</h2>
                    <div className="entry-content" dangerouslySetInnerHTML={{__html:restData.acf.about_me_text}}>
                    </div>
                    <ul className='social-links'>
                        <li><a href="https://www.linkedin.com/in/jonny-nguyen-56a124252/"><FontAwesomeIcon className='linkedin' icon={faLinkedin}/></a></li>
                        <li><a href="https://github.com/Joonald"><FontAwesomeIcon className='github' icon={faSquareGithub}/></a></li>
                        <li><a href="https://twitter.com/JonnyPNguyen"><FontAwesomeIcon className='twitter' icon={faSquareTwitter}/></a></li>
                    </ul>
                </section>
            </section>
                
        : 
            <Loading />
        }
        </>
    );
};

export default About;
