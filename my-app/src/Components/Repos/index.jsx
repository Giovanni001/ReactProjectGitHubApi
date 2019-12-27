import React from "react";
import PropTypes from "prop-types";

function Repos({ className, title, repos }) {
  return (
    <div className={className}>
      <h2>{title}</h2>
      {repos.map((rep, index) => {
        return (
          <li key={index}>
            <a href={rep.link}>{rep.name}</a>
          </li>
        );
      })}
    </div>
  );
}

export default Repos;

Repos.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  repos: PropTypes.array
};
