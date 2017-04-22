import React, { Component } from 'react';
import './Marker.scss';

class Marker extends Component {
  constructor(props) {
    super(props);
  }

  markerClick(e) {
    console.log('markerClick', this);
  }

  render() {
    return (
      <div
        className="gmaps__marker gmaps__marker--animate"
        onClick={() => this.markerClick()}
      >
      </div>
    );
  }
}

export default Marker;
