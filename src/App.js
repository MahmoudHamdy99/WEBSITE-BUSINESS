import { useEffect } from 'react';
import './App.css';
import Footer from './Components/footer';
import Header from './Components/header';
import Main from './Components/main';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
