import '../../styles/Host.css';
import React from 'react';

function Host({ host }) {
  return (
    <div className="host-profil">
      <p className="host-name">{host.name}</p>
      <img src={host.picture} alt={host.name} className="host-photo" />
    </div>
  );
}

export default Host;
