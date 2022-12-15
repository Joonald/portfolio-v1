import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Loading from '../utilities/Loading';
import ProjectTabs from '../singlePage/ProjectTabs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; 
import Contact from '../sections/Contact';


const Work = ( {featuredImage, data} ) => {

    useEffect(() => {
		document.title = "Jonny Nguyen's Creations";
	}, []);
    
    const { id } = useParams();
    const restPath = `https://jonnynguyen.com/react-headless/wp-json/wp/v2/portfolio-projects/${id}?acf_format=standard&_embed`;
    const [restData, setData] = useState([]);
    const [isLoaded, setLoadStatus] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
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
            <>
                <section className='single-work'>
                    <nav className='return-nav'><Link to='/'><FontAwesomeIcon icon={faArrowLeft}/> Go Back</Link></nav>
                    <section>
                        <section className='single-work-image'>
                            {restData._embedded['wp:featuredmedia'][0] &&
                                <figure className="featured-images" dangerouslySetInnerHTML={featuredImage(restData._embedded['wp:featuredmedia'][0])}></figure>
                            }
                        </section>
                        <section>
                            <div className='work-links'>
                                { restData.acf.github && <a href={restData.acf.github}>Github</a>}
                                { restData.acf.live_site && <a href={restData.acf.live_site}>Live Site</a> }
                            </div>
                            <h1>{restData.title.rendered}</h1>
                            <section className='work-details'>
                                <p>Project Duration:  {restData.acf.project_duration}</p>
                                { restData.acf.development_team &&
                                <div className='sub-sub-heading'>
                                    <p>Team: </p>
                                    <ul className='team-list'>
                                        {restData.acf.development_team.map( (member, i) => <li key={i}> {member.team_member} </li>)}
                                    </ul>
                                </div> }
                                <div className='sub-sub-heading'>
                                    <p>Technology Stack:</p>
                                    <ul className='tech-skill-list'>
                                        { restData.acf.development_stack.map( (skill, i) => <li key={i}>{skill.tech_skill}</li>)}
                                    </ul>
                                </div>
                            </section>
                            <h2 className='sub-heading-text'>Project Overview</h2>
                            <p className='project-overview'>{restData.acf.project_overview}</p>
                            <ProjectTabs data={restData} />
                        </section>
                    </section>
                </section>
                <Contact data={data} />
            </>
        : 
            <Loading />
        }
        </>
    )

}

export default Work
