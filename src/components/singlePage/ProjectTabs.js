import { useState } from "react";
import Buttons from "../utilities/Button";
import Slider from 'react-slick';

const ProjectTabs = ( {data} ) => {
    const [tab, setTab] = useState('Planning');
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
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
        setTab(value)
    };
    
    return (
        <section className='project-tabs'>
            <Slider {...settings} >
            {data.map( (tabTitle, i) => <Buttons key={i} value={tabTitle.title} text={tabTitle.title} handleClick={handleClick} />)}
            </Slider>
            {data.map ( (tabContent, i) => tab === tabContent.title && 
              <section key={i}>
                <h3 className='sub-heading-text'>{tabContent.title}</h3>
                <div dangerouslySetInnerHTML={{__html:tabContent.content}} />
              </section>
            )}
        </section>
    );
};

export default ProjectTabs;