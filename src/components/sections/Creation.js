import { useState, useEffect } from 'react';
import Loading from '../utilities/Loading';
import { Link } from 'react-router-dom';


const Creation = ( {featuredImage, value} ) => {
    const restPath = `https://jonnynguyen.com/portfolio-wp/wp-json/wp/v2/portfolio-projects/${value}?_embed&acf_format=standard/`;
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
                <section className='creation'>
                    <section className='creation-image'>
                        {restData._embedded['wp:featuredmedia'][0] &&
                            <figure className="featured-images" dangerouslySetInnerHTML={featuredImage(restData._embedded['wp:featuredmedia'][0])}></figure>
                        }
                    </section>
                    <section className='creation-content'>
                        <p className='sub-title'>Featured Project</p>
                        <h3>{restData.title.rendered}</h3>
                        <p>{restData.acf.short_description}</p>
                        <ul className='tech-skill-list'>
                            {restData.acf.development_stack.map( (skill, i) => <li key={i}>{skill.tech_skill} </li> )}
                        </ul>
                    </section>
                    <Link  className='outline-btn' to={`/work/${restData.id}`}>See Process</Link>
                </section>
        :
            <Loading />
        }
        </>
    );
};

export default Creation;