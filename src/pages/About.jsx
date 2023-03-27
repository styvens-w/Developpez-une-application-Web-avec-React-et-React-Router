import AboutIndex from '../components/About';
import '../styles/About.css';
import { useEffect } from 'react';

function About() {
  useEffect(() => {
    document.title = `Kasa - À propos`;
  }, []);

  return (
    <main className="main-about">
      <AboutIndex />
    </main>
  );
}

export default About;
