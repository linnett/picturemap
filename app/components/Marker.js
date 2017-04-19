import React, { Component } from 'react';

class Marker extends Component {
  constructor(props) {
    super(props);
  }

  markerClick(e) {
    console.log('markerClick', this);
  }

  render() {
    return (
      <div className='gmap__marker' onClick={() => this.markerClick()}>
        {this.props.text}
      </div>
    );
  }
}

export default Marker;
