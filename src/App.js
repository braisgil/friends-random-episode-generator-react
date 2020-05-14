import React, { Component } from 'react';

import HeaderComponent from './components/header.component'
import EpisodeInfoComponent from './components/episode-info.component'

import {randomGen} from './utils/randomEpiGen';
import {seasons} from './utils/netflixLinkGen';
import './utils/smoothScrollToPolyfill'

import imdbConfig from './imdb.config.json';
import './App.scss';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      data: '',
      netflixLink: '',
      isLoaded: false
    }
  }

  async getData() {
    const apiKey = imdbConfig.apiKey;
    const randomEpisode = randomGen();
    const netflixLink = seasons[randomEpisode.season-1][randomEpisode.episode-1];
    const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&t=friends&season=${randomEpisode.season}&episode=${randomEpisode.episode}`;
    const data = await fetch(apiUrl)
      .then(response => response.json())
      .then(data => data);
    this.setState({
      data,
      netflixLink,
      isLoaded: true
    })
  }

  clickHandler() {
    this.getData();
    if ('scrollBehavior' in document.documentElement.style) {
      window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
      });
    } else {
        window.smoothScrollTo(0, 0, 500);
    }
  }
 
  render() {
    return (
      <div className="App">
        <div className="info-wrapper">
          <HeaderComponent name="Random Episode Generator"/>
          {this.state.isLoaded && <EpisodeInfoComponent data={this.state.data} link={this.state.netflixLink} />}
        </div>
        <div className="info-wrapper__trigger">
          <span className="btnGen" onClick={() => this.clickHandler()}>Get a Random Episode</span>
        </div>
      </div>
    )
  }
}
