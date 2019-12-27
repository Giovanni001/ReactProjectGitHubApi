import React from "react";
import PropType from 'prop-types'

function Botoes({ getRepos, getStarred }) {
  return (
    <div className="actions">
      <button onClick={getRepos}>Ver Repositorios</button>
      <button onClick={getStarred}>Ver Favoritos</button>
    </div>
  );
}

export default Botoes;

Botoes.proptype = {
  getRepos: PropType.func.isRequired,
  getStarred: PropType.func.isRequired
}