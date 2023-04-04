import AboutIndex from '../components/About';
import '../styles/About.css';

function About() {
  document.title = `Kasa - À propos`;
  return (
    <main className="main-about">
      <AboutIndex />
    </main>
  );
}

export default About;
