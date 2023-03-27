import HousingIndex from '../components/Housing';
import '../styles/Housing.css';
import { useEffect } from 'react';

function Housing() {
  useEffect(() => {
    document.title = `Kasa - Logement`;
  }, []);

  return (
    <main className="main-housing">
      <HousingIndex />
    </main>
  );
}

export default Housing;
