import Home from './components/home';
import NavBar from './components/navBar';
import SocialLinks from './components/socialLinks';
import About from './components/about';
import Portfolio from './components/portfolio';
import Experience from './components/experience';
import Contact from './components/contact';

function App() {


  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
  
      
      <SocialLinks />
    </div>
  );
}

export default App;
