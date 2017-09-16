import React, { Component } from 'react';
import logoDnb from './dnb-logo-cropped.png';
import user from './user.png';
import './index.css';
import './MainPage.css';
import Instagram from './instagram.js';
import User from './user.js';


class MainPage extends Component {
  render() {
    return (
      <div className="App">
        <header className="green white-text">
          <img src={logoDnb} className="logo" alt="logo" />
          <div className="user-wrapper">
            <img src={user} className="user" alt="user profile" />
            <User className="white-text"/>
          </div>
        </header>
        <div className="container">
          <h1 className="green-text">
            It's a match!
          </h1>
          <h2 className="green-text lovers-top">
            You
          </h2>
          <span className="green-text heart">♡</span>
          <h2 className="green-text lovers-bottom">
            Area
          </h2>

          <div className="circle-wrapper green-text">
            <div className="circle">
              <div className="value">
                40
              </div>
              <div className="unit">
                m<span className="raised">2</span>
              </div>
            </div>
            <h3>
              Expected floor space
            </h3>
          </div>
          <div className="circle-wrapper green-text">
            <div className="circle">
              <div className="value">
                15
              </div>
              <div className="unit">
                min
              </div>
            </div>
            <h3 className="green-text">
              To city centre
            </h3>
          </div>
          <div className="circle-wrapper green-text">
            <div className="circle">
              <div className="value">
                27
              </div>
              <div className="unit">
                years
              </div>
            </div>
            <h3 className="green-text">
              Average
            </h3>
          </div>

          <Instagram/>
          {/*<User/>*/}
        </div>

        <div className="map-background">

        </div>
      </div>
    );
  }
}

export default MainPage;
