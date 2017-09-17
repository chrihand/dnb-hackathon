import React, { Component } from 'react';
import logoDnb from './dnb-logo-cropped.png';
import user from './user.png';
import './index.css';
import './MainPage.css';
import Instagram from './instagram.js';
import User from './user.js';

import {find_area} from './eiendomsdata/area_algorithm.js'


class MainPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      area: ""
    }
  }
  componentDidMount = () => {
    this.setState ({
      area: find_area('med_barn', 37, 800000)
    })
  }

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
            It´s a match!
          </h1>
          <h2 className="green-text lovers-top">
            You
          </h2>
          <span className="green-text heart">♡</span>
          <h2 className="green-text lovers-bottom">
            {this.state.area}
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
                37
              </div>
              <div className="unit">
                years
              </div>
            </div>
            <h3 className="green-text">
              Average
            </h3>
          </div>

          <h1 className="green-text">What´s up at {this.state.area}?</h1>
          <Instagram area={this.state.area}/>
          {/*<User/>*/}
        </div>

        <div className="map-background">

        </div>
      </div>
    );
  }
}

export default MainPage;
