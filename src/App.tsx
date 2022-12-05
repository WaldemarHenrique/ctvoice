
import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Ads from './components/Ads/Ads';
import ComicsSession from './components/ComicsSession';
import Footer from './components/Footer';
import GreyNavBar from './components/GreyNavBar';
import Header from './components/Header';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import UseComics from './context/useComics.context';
import { getComics } from './services/comicsSession';

function App() {

  const [datComics, setDataComics] = useState<any>();
  const [pagination, setPagination] = useState(12);
  const [datComicsFiltered, setDataComicsFiltered] = useState<any>();


  useEffect(() => {
      if(!datComicsFiltered){
        getComics(pagination).then(res => {
        setDataComics(res.data.results);
        return
      })
      }
      setDataComics(datComicsFiltered);
  }, [pagination, datComicsFiltered])

  
  return (
    <div className="App">
      <UseComics.Provider value={{datComics, setDataComicsFiltered, setPagination, pagination}}>
        <Ads color='#515151' />
        <Header />
        <NavBar />
        <Hero />
        <GreyNavBar />
        <ComicsSession />
        <Ads color='#1f1f1f' />
        <Footer />
      </UseComics.Provider>
    </div>
  );
}

export default App;
