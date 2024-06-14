import Header from './Components/Header';
import Slider from './Components/Slider';
import FlashNews from './Components/FlashNews';
import About from './Components/About';
import Services from './Components/Services';
import Counts from './Components/Counts';
import UpcomingEvents from './Components/UpcomingEvents';
import LatestNews from './Components/LatestNews';
import Gallery from './Components/Gallery';
import Footer from './Components/Footer';
import Loading from './Components/Loading';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Slider />
          <FlashNews />
          <About />
          <UpcomingEvents />
          <Counts />
          <Services />
          <LatestNews />
          <Gallery />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;