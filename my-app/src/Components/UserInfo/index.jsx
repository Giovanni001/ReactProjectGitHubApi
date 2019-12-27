import React from "react";
import PropTypes from "prop-types";

function UserInfo({ userinfo }) {
  return (
    <div className="user-info">
      <img src={userinfo.photo} alt='img'/>
      <h2>
        <a href={`https://github.com/${userinfo.login}`}>{userinfo.username}</a>
      </h2>

      <ul className="">
        <li>Repositorios: {userinfo.repos}</li>
        <li>Seguidores: {userinfo.followers}</li>
        <li>Seguindo: {userinfo.following}</li>
      </ul>
    </div>
  );
}

export default UserInfo;

UserInfo.propTypes = {
  userinfo: PropTypes.shape({
    username: PropTypes.string,
    photo: PropTypes.string,
    login: PropTypes.string,
    repos: PropTypes.number,
    followers: PropTypes.number,
    following: PropTypes.number
  })
};
