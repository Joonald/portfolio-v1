import { lazy, useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseCrack, faCircleUser, faFolderOpen, faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons'; 
import { HashLink } from 'react-router-hash-link';

const Intro = lazy( () => import("./sections/Intro")); 
const About = lazy(() => import("./sections/About"));
const Works = lazy(() => import("./sections/Works"));
const Contact = lazy(() => import("./sections/Contact"));

const FrontPage = ( {featuredImage, restData} ) => {
    
    useEffect(() => {
		document.title = "Jonny Nguyen";
	}, []);

    const [isActive, setIsActive] = useState('home');
    
    function handleClick (value) {
        setIsActive(value);
    };

    return(
        <>
            <div className="navBar">
                <nav className="site-navigation">
                    <ul>
                        <li onClick={()=>handleClick('home')}><HashLink to='#header' smooth><FontAwesomeIcon className={isActive === 'home' ? 'nav-icon active-nav' : 'nav-icon'} icon={faHouseCrack}/></HashLink></li>
                        <li onClick={()=>handleClick('about')}><HashLink to='#about' smooth><FontAwesomeIcon className={isActive === 'about' ? 'nav-icon active-nav' : 'nav-icon'} icon={faCircleUser}/></HashLink></li>
                        <li onClick={()=>handleClick('tech-skills')}><HashLink to='#tech-skills' smooth><FontAwesomeIcon className={isActive === 'tech-skills' ? 'nav-icon active-nav' : 'nav-icon'} icon={faCode}/></HashLink></li>
                        <li onClick={()=>handleClick('works')}><HashLink to='#works' smooth><FontAwesomeIcon className={isActive === 'works' ? 'nav-icon active-nav' : 'nav-icon'} icon={faFolderOpen}/></HashLink></li>
                        <li onClick={()=>handleClick('contact')}><HashLink to='#contact' smooth><FontAwesomeIcon className={isActive === 'contact' ? 'nav-icon active-nav' : 'nav-icon'} icon={faEnvelope}/></HashLink></li>
                    </ul>
                </nav>
            </div>
            <Intro data={restData[2]}/>
            <About data={restData[1]}/>
            <Works featuredImage={featuredImage}/>
            <Contact data={restData[0]} />
        </>
    );
};

export default FrontPage;