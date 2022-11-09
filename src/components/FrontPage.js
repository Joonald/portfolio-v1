import { lazy, Suspense } from 'react';
import Intro from "./sections/Intro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseCrack, faCircleUser, faFolderOpen, faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons'; 
import { HashLink } from 'react-router-hash-link';
import Loading from './utilities/Loading';
const About = lazy(() => import("./sections/About"));
const TechSkills = lazy(() => import("./sections/TechSkills"));
const Works = lazy(() => import("./sections/Works"));
const Contact = lazy(() => import("./sections/Contact"));



const FrontPage = ( {featuredImage} ) => {

    return(
        <>  
            <div className="navBar">
                <nav className="site-navigation">
                    <ul>
                        <li><HashLink to='#header' smooth><FontAwesomeIcon icon={faHouseCrack}/></HashLink></li>
                        <li><HashLink to='#about' smooth><FontAwesomeIcon icon={faCircleUser}/></HashLink></li>
                        <li><HashLink to='#tech-skills' smooth><FontAwesomeIcon icon={faCode}/></HashLink></li>
                        <li><HashLink to='#works' smooth><FontAwesomeIcon icon={faFolderOpen}/></HashLink></li>
                        <li><HashLink to='#contact' smooth><FontAwesomeIcon icon={faEnvelope}/></HashLink></li>
                    </ul>
                </nav>
            </div>
            <Intro />
            <Suspense falleback={<Loading/>}>
            <About />
            <TechSkills />
            <Works featuredImage={featuredImage}/>
            <Contact />
            </Suspense>
        </>   
    );
};

export default FrontPage;