
import { useState, useEffect } from 'react';
import Loading from '../utilities/Loading';
import Creation from '../sections/Creation';
import Buttons from '../utilities/Button';
import Slider from 'react-slick';

const Works = ( {featuredImage} ) => {
    const restPath = 'https://jonnynguyen.com/react-headless/wp-json/wp/v2/portfolio-projects?_embed';
    const [restData, setData] = useState([]);
    const [isLoaded, setLoadStatus] = useState(false);
    const [creation, setCreation] = useState('56');
    const [slug, setSlug] = useState('the-villas-bay');

    const settings = {
        dots: false,
        infinite: false,
        arrows: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
            }
          },
        ],
    }
    
    function handleClick(value, slug) {
        setCreation(value);
        setSlug(slug)
    };

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
            <section id="works">
                <h2 className="sub-heading-text">My Creations</h2>
                <ul className="creation-tabs">
                    <Slider {...settings}>
                        {restData.map( (tab, i) => 
                    <li key={i}><Buttons state={slug} slug={tab.slug}  value={tab.id} text={tab.title.rendered} handleClick={handleClick} 
                        /></li>
                        ) }
                    </Slider>  
                </ul>
                <Creation featuredImage={featuredImage} value={creation} />
            </section>
        : 
            <Loading />
        }
        </>
    );
};

export default Works;
