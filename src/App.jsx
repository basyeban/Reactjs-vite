import {Routes, Route} from 'react-router-dom';

import NavbarComponent from './components/NavbarComponent';
import FooterComponent from './components/FooterComponent';

import Homepage from './pages/Homepage';
import Testimonialpage from './pages/Testimonialpage';
import Syaratketenpage from './pages/Syaratketenpage';
import Faqpage from './pages/Faqpage';
import Classpage from './pages/Classpage';

function App() {
 return (
 <div>
  <NavbarComponent />


  <Routes>
    <Route path='/' Component={Homepage}/>
    <Route path='/kelas' Component={Classpage}/>
    <Route path='/testimonial' Component={Testimonialpage}/>
    <Route path='/faq' Component={Faqpage}/>
    <Route path='/syaratketen' Component={Syaratketenpage}/>
  </Routes>


  <FooterComponent />
 </div>
 );
}

export default App
