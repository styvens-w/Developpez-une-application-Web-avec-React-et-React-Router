import HousingIndex from '../components/Housing';
import '../styles/Housing.css';

function Housing() {
  document.title = `Kasa - Logement`;
  return (
    <main className="main-housing">
      <HousingIndex />
    </main>
  );
}

export default Housing;
