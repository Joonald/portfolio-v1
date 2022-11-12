import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ReactComponent as ReactLogo } from './port-logo-blue.svg';
import { useState, useEffect } from 'react';
import FrontPage from './components/FrontPage';
import Work from './components/singlePage/Work';
import React from 'react';
import Loading from './components/utilities/Loading';

function App() {
  const restPath = 'https://jonnynguyen.com/react-headless/wp-json/wp/v2/pages';
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

  const featuredImage = ( featuredImageObject ) => {
    let imgWidth = featuredImageObject.media_details.sizes.full.width;
    let imgHeight = featuredImageObject.media_details.sizes.full.height;
    let img = `<img src="${featuredImageObject.media_details.sizes.full.source_url}" 
        width="${imgWidth}"
        height="${imgHeight}"
        loading="lazy"
        alt="${featuredImageObject.alt_text}"
        srcset="${featuredImageObject.media_details.sizes.full.source_url} ${imgWidth}w, 
        ${featuredImageObject.media_details.sizes.large.source_url} 1024w,
        ${featuredImageObject.media_details.sizes.medium_large.source_url} 768w,
        ${featuredImageObject.media_details.sizes.medium.source_url} 300w"
        sizes="(max-width: ${imgWidth}) 100vw, ${imgWidth}px">`;
    return {__html: img}
  }

  return (
      <Router basename="/">

        <header id="header" className="site-header">
          <div className="site-branding">
            <Link to='/'><ReactLogo className='logo' /></Link>
          </div>
        </header>
        { isLoaded ? 
        <main id="main">
            <Routes>
              <Route exact path='/' element={<FrontPage featuredImage={featuredImage} restData={restData} />} />
              <Route path='/work/:id' element={<Work featuredImage={featuredImage} data={restData[0]} />} />
            </Routes>
        </main>
        : 
        <Loading />
        }
        <footer>
				  <p className="copyright">Designed & Built by <a href="www.jonnynguyen.com">Jonny Nguyen</a>.</p>
        </footer>
        
      </Router>
  );
}

export default App;
