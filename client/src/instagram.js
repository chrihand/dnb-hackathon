import React, { Component } from 'react';

class Instagram extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: ""
    };
    this.componentWillMount();
  };

  componentWillMount = () => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://api.instagram.com/v1/tags/nordreaker/media/recent?access_token=22168267.538dd5c.ab359fbf7e984e36bcb62e93189ed8c5"; // site that doesn’t send Access-Control-*
    fetch(proxyurl + url)
    .then(response => response.text())
    .then(contents => {
      this.setState ({
        imageUrl: (JSON.parse(contents).data[0].images.standard_resolution.url)
      });
    })
    .catch(console.log("Can’t access " + url + " response. Blocked by browser?"))
  }

  render() {
    return (
      <div>
        <img src={this.state.imageUrl}/>
      </div>
    );
  }
}

export default Instagram;
