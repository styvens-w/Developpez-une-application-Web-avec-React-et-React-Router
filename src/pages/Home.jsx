import '../styles/Home/Home.css';
import { useEffect } from 'react';
import HomeIndex from '../components/Home';

function Home() {
    useEffect(() => {
        document.title = "Kasa - Acceuil"
    }, []);

  return (
    <main className="main-home">
      <HomeIndex />
    </main>
  );
}

export default Home;
