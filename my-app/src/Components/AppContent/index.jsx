import React from "react";
import PropTypes from 'prop-types';
import { Spin } from 'antd';
import Search from "../Search";
import UserInfo from "../UserInfo";
import Actions from "../Actions";
import Repos from "../Repos";

function AppContent({
  userinfo,
  repos,
  starred,
  handleSearch,
  getRepos,
  getStarred,
  isLoading,
  isDisabled
}) {
  return (
    <div>
        <div className="app">
        <Search isDisabled={isDisabled} handleSearch={handleSearch}/>
        {isLoading && <div> <Spin /> </div>}
        {!!userinfo && <UserInfo userinfo={userinfo}/>}
        {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

        {!!repos.length && (
          <Repos className="repos" title="Repositorios" repos={repos} />
        )}

        {!!starred.length && (
          <Repos className="starred" title="Favoritos" repos={starred} />
        )}
      </div>
    </div>
  );
}

export default AppContent;

AppContent.prototypes = {
  userinfo: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  handleSearch: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool.isRequired
}
