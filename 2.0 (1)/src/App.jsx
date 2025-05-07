import './style.css';
import Navbar from './Navbar';
import Home from './Home';
import Portfolio from './Portfolio';
import Services from './Services';
import Contact from './Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Portfolio />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
