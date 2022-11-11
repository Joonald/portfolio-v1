import { useState } from 'react';

const Contact = ( {data} ) => {
    const [isActive, setIsActive] = useState(false);
    const email = 'jonnypn9@gmail.com';

    function copyEmail(e) {
        navigator.clipboard.writeText(email);
        setIsActive(current => !current);
    }
    
    return (
        <>
            <section id='contact'>
                <h2 className='sub-heading-text'>{data.title.rendered.replace(/(?:&#8217;)/g, "'")}</h2>
                <section className='contact-content'>
                    <p>{data.acf.contact_text}</p>
                    <button className='button' onClick={copyEmail}>{isActive ? 'Email Copied!' : 'Say Hello!'}</button>
                </section>
            </section>
        </>
    )
}
export default Contact;