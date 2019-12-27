import React, { Component } from "react";
import PropTypes from "prop-types";
import AppContent from "./Components/AppContent";
import "antd/dist/antd.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
      isLoading: false,
      isDisabled: false
    };
  }

  getApiGitHubURL = (username, type) => {
    const internalUser = username ? `/${username}` : "";
    const internalType = type ? `/${type}` : "";
    //na hora de concatenar ele vai usar a verificação do if ternario acima
    return `https://api.github.com/users${internalUser}${internalType}`;
  };

  handleSearch = e => {
    const value = e.target.value;
    const keyCode = e.which || e.keyCode;
    const ENTER = 13;

    if (keyCode === ENTER) {
      this.setState({ isLoading: true, isDisabled: true });
      axios
        //fazendo a requisição para a API usando a funçao getApiGitHubURL
        .get(this.getApiGitHubURL(value))
        .then(result => {
          this.setState({
            userinfo: {
              username: result.data.name,
              photo: result.data.avatar_url,
              login: result.data.login,
              repos: result.data.public_repos,
              followers: result.data.followers,
              following: result.data.following
            },
            repos: [],
            starred: []
          });
          this.setState({ isLoading: false, isDisabled: false });
        })
        .catch(err => {
          console.log("ERRO: ", err);
          return <h1>Ops, deu algo errado !</h1>;
        });
    }
  };

  getRepos = type => {
    //retorna uma função
    //usando a array function para que seja possivel usar o this.setState({})
    return e => {
      const userLogin = this.state.userinfo.login;
      axios
        .get(this.getApiGitHubURL(userLogin, type))
        .then(result => {
          this.setState({
            //retornando um objeto, return está implícito
            [type]: result.data.map(rep => ({
              name: rep.name,
              link: rep.html_url
            }))
          });
        })
        .catch(err => {
          console.log("ERRO: ", err);
          return <h1>Ops, deu algo errado !</h1>;
        });
    };
  };

  render() {
    return (
      <AppContent
        userinfo={this.state.userinfo}
        isLoading={this.state.isLoading}
        isDisabled={this.state.isDisabled}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={e => this.handleSearch(e)}
        getRepos={this.getRepos("repos")}
        getStarred={this.getRepos("starred")}
      />
    );
  }
}

export default App;

AppContent.prototype = {
  userinfo: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired
};
