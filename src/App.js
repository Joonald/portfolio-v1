import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ReactComponent as ReactLogo } from './port-logo-blue.svg';
import { lazy, Suspense } from 'react';
import Loading from './components/utilities/Loading';
const FrontPage = lazy( () => import('./components/FrontPage')); 
const Work = lazy(() => import('./components/singlePage/Work'));



function App() {

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
        
        <main id="main">
          <Suspense fallback={<Loading/>}>
            <Routes>
              <Route exact path='/' element={<FrontPage featuredImage={featuredImage} />} />
              <Route path='/work/:id' element={<Work featuredImage={featuredImage} />} />
            </Routes>
          </Suspense>
        </main>
        <footer>
				  <p className="copyright">Designed & Built by <a href="www.jonnynguyen.com">Jonny Nguyen</a>.</p>
        </footer>
      </Router>
  );
}

export default App;
