import React, { Component } from 'react';
import Slider from 'react-image-slider';
import './../node_modules/react-image-slider/lib/image-slider.css';
import instaLogo from './instagram.png';
import './index.css';

class Instagram extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: []
    };
    this.componentWillMount();
  };

  componentWillMount = () => {
    const area = this.convertPlaceToTag(this.props.area)
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://api.instagram.com/v1/tags/nordreaker/media/recent?access_token=22168267.538dd5c.ab359fbf7e984e36bcb62e93189ed8c5"; // site that doesn’t send Access-Control-*
    fetch(proxyurl + url)
    .then(response => response.text())
    .then(contents => {
      this.setState ({
        imageUrl: [JSON.parse(contents).data[0].images.standard_resolution.url, JSON.parse(contents).data[1].images.standard_resolution.url, JSON.parse(contents).data[2].images.standard_resolution.url]
      });
    })
    .catch(console.log("Can’t access " + url + " response. Blocked by browser?"))
  };

  convertPlaceToTag = (area) => {
    area = area.toLowerCase().replace(/\s/g, '');
    return area;
  };

  render() {
    const divStyle = {
      height: '40px'
    };



    return (
      <div className='container'>
        <img src={instaLogo} alt="Instagram Logo" style={divStyle}/>
        <Slider images={this.state.imageUrl} isInfinite delay={5000}>
          {this.state.imageUrl.map((image, key) => <div key={key}><img src={image} /></div>)}
        </Slider>
      </div>
    );
  }
}

export default Instagram;
