import React, { Component } from 'react'
import imdbLogo from '../images/imdb-logo.png';
import netflixLogo from '../images/netflix-logo.png';

export default class EpisodeInfo extends Component {

  render() {
    const { Title, Plot, Released, Episode, Season, Poster, imdbID } = this.props.data;
    const netflixLink = this.props.link;
    return (
      <>
        <div className="info-wrapper__identifier">
          Season: <span>{Season}</span> - Episode: <span>{Episode}</span>
        </div>
        <div className="info-wrapper__section">
          <div className="info-wrapper__section-img">
            <div className="info-wrapper__image">
              <img src={Poster.replace("_SX300", "_SX500")} alt=""/>
            </div>
          </div>
          <div className="info-wrapper__section-copy">
            <div className="info-wrapper__title">
              Title:<br/><span>{Title}</span>
            </div>
            <div className="info-wrapper__plot">
              Plot:<br/><span>{Plot}</span>
            </div>
            <div className="info-wrapper__aired">
              Episode Aired:<br/><span>{Released}</span>
            </div>
          </div>
        </div>

        <div className="info-wrapper__option-container">
          <div className="info-wrapper__option">
            <a href={`https://www.imdb.com/title/${imdbID}`} target="_blank" rel="noopener noreferrer">
              <img src={imdbLogo} alt=""/>
              <span className="btnText">
                More info about this episode
              </span>
            </a>
          </div>
          <div className="info-wrapper__option">
            <a href={netflixLink} target="_blank" rel="noopener noreferrer">
              <img src={netflixLogo} alt=""/>
              <span className="btnText">
                Watch this episode on Netflix
              </span>
            </a>
          </div>
        </div>
      </>
    )
  }
}
