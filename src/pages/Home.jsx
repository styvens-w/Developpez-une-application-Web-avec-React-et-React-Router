import '../styles/Home.css';
import HomeIndex from '../components/Home';

// On crée un composant React fonctionnels qui va retourner un bloc de JSX
function Home() {
  // On modifie le titre de l'onglet
  document.title = 'Kasa - Acceuil';
  return (
    // On crée un nœud parent
    <main className="main-home">
      {/* On appel le composant HomeIndex qui contiendra les éléments de la page d'acceuil */}
      <HomeIndex />
    </main>
  );
}

// On expose le composant Home à d'autres modules
export default Home;
