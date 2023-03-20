import React from 'react';
import { Link } from 'react-router-dom';

function ErrorIndex() {
  return (
    <React.Fragment>
      <p className="cError">404</p>
      <p className="dError">Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="sError">
        Retourner sur la page d’accueil
      </Link>
    </React.Fragment>
  );
}

export default ErrorIndex;
