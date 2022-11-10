import { useState } from "react";
import Buttons from "../utilities/Button";


const ProjectTabs = ( {data} ) => {
    const [tab, setTab] = useState('Planning');

    function handleClick(value) {
        setTab(value);
    };

    return (
        <section className='project-tabs'>
            {data.acf.project_content.map( (tabTitle, i) => <Buttons slug={tabTitle.title} state={tab} key={i} value={tabTitle.title} text={tabTitle.title} handleClick={handleClick} />)}
            {data.acf.project_content.map ( (tabContent, i) => tab === tabContent.title && 
              <section key={i}>
                <h3 className='sub-heading-text'>{tabContent.title}</h3>
                <div className='tab-content' dangerouslySetInnerHTML={{__html:tabContent.content}} />
              </section>
            )}
        </section>
    );
};

export default ProjectTabs;