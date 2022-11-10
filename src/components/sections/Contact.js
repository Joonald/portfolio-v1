import { useState, useEffect } from 'react';
import Loading from "../utilities/Loading";

const Contact = () => {

    const restPath = 'https://jonnynguyen.com/portfolio-wp/wp-json/wp/v2/pages/39';
    const [restData, setData] = useState([]);
    const [isLoaded, setLoadStatus] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const email = 'jonnypn9@gmail.com';

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


    function copyEmail(e) {
        navigator.clipboard.writeText(email);
        setIsActive(current => !current);
    }
    
    
    return (
        <>
        { isLoaded ?
            <section id='contact'>
                <h2 className='sub-heading-text'>{restData.title.rendered.replace(/(?:&#8217;)/g, "'")}</h2>
                <section className='contact-content'>
                    <p>{restData.acf.contact_text}</p>
                    <button className='button' onClick={copyEmail}>{isActive ? 'Email Copied!' : 'Say Hello!'}</button>
                </section>
            </section>
        :
            <Loading />
        }
        </>
        
    )
}
export default Contact;