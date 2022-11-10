import { useState, useEffect, useRef } from 'react';
import Loading from '../utilities/Loading';
import { HashLink } from 'react-router-hash-link';

const Intro = () => {
    const restPath = 'https://jonnynguyen.com/portfolio-wp/wp-json/wp/v2/pages/35';
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
            <section id="intro">
                <section className="intro-content">
                    <p className="neon-text">{restData.acf.introduction}</p>
                    <h1 className="my-name">{restData.acf.name}</h1>
                    <h2 className="neon-text">{restData.acf.role}.</h2> 
                    <p>{restData.acf.short_description}</p>
                    <HashLink to='#works' className='outline-btn' smooth>My Creations</HashLink>      
                </section>
            </section>
        : 
            <Loading />
        }
        </>   
    );
};

export default Intro;
