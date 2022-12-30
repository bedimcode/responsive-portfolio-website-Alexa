import './style/styles.css';
import './style/App.css';
import { Header } from './components/Header';
import { Home } from './pages/1_Home';
import { Footer } from './components/Footer';
import { About } from './pages/2_About';
import { Skills } from './pages/3_Skills';
import { Qualifications } from './pages/4_Qualifications';
import { Services } from './pages/5_Services';
import { Hire } from './pages/7_Hire';
import { Contact } from './pages/8_Contact';
import { Portfolio } from './pages/6_Portfolio';
import { ScrollTop } from './utils/ScrollTop';

function App() {
  return (
    <div className='Main'>
      <Header />

      <Home />
      <About />
      <Skills />
      <Qualifications />
      <Services />
      <Portfolio />
      <Hire />
      <Contact />

      <Footer />

      <ScrollTop />
    </div>
  );
}

export default App;
