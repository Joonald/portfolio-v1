
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../utilities/Loading';
import Creation from '../sections/Creation';
import Buttons from '../utilities/Button';
import Slider from 'react-slick';

const Works = ( {featuredImage} ) => {
    const restPath = 'https://jonnynguyen.com/portfolio-wp/wp-json/wp/v2/portfolio-projects';
    const [restData, setData] = useState([]);
    const [isLoaded, setLoadStatus] = useState(false);
    const [creation, setCreation] = useState('65');

    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        appendDots: dots => (
            <div
              style={{
                backgroundColor: "transparent",
                padding: "10px"
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <button
              style={{
                color: "#0E3A73",
                border: "1px #0E3A73 solid"
              }}
            >
              {i + 1}
            </button>
          ),
    }
    
    function handleClick(value) {
        setCreation(value);
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
                        <li key={i}><Buttons value={tab.id} text={tab.title.rendered} handleClick={handleClick} 
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
