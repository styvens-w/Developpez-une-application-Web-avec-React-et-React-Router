import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, Navigate, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Housing from './pages/Housing';
import About from './pages/About';
import Error from './pages/Error';
import './index.css';

// On crée une racine pour afficher les composants React dans un nœud DOM du navigateur
const root = ReactDOM.createRoot(document.getElementById('root'));

// On utilise render() pour afficher un/des composant(s) React à l'intérieur de la racine précédemment créer (root)
root.render(
  // On utilise React.Fragment qui permet de grouper une liste d’enfants sans ajouter de nœud supplémentaire au DOM.
  <React.Fragment>
    {/* On utilise BrowserRouter pour stocker l'emplacement actuel dans la barre d'adresse du navigateur */}
    <BrowserRouter>
      {/* On appelle le composant Header qui s'affichera sur toutes les pages */}
      <Header />
      {/* On utilise Routes qui contiendra un ensemble de route (itinéraires) enfant à partir de l'emplacement actuel */}
      <Routes>
        {/* La liste des routes */}
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logements/:idLogement" element={<Housing />} />
        <Route path="/404" element={<Error />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
      {/* On appelle le composant Footer qui s'affichera sur toutes les pages */}
      <Footer />
    </BrowserRouter>
  </React.Fragment>
);
