import { HashLink } from 'react-router-hash-link';

const Intro = ( {data} ) => {
    
    
    return (
        <>
            <section id="intro">
                <section className="intro-content">
                    <p className="neon-text">{data.acf.introduction}</p>
                    <h1 className="my-name">{data.acf.name}</h1>
                    <h2 className="neon-text">{data.acf.role}.</h2> 
                    <p>{data.acf.short_description}</p>
                    <HashLink to='#works' className='outline-btn' smooth>My Creations</HashLink>      
                </section>
            </section>
        </>   
    );
};

export default Intro;
