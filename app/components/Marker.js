import React, { Component } from 'react';

class Marker extends Component {
  constructor(props) {
    super(props);
  }

  markerClick(e) {
    console.log('markerClick', this);
  }

  render() {
    const style = {
      background: '#fff',
      display: 'inline-block',
      borderRadius: '18px 18px 18px 0',
      width: '26px',
      height: '26px',
      border: '6px solid #EA2212',
      transform: 'rotate(-45deg)',
      position: 'relative',
      boxShadow: '-1px 1px 2px rgba(0,0,0,.2)',
      left: '-13px',
      top: '-13px',
      position: 'absolute',
      cursor: 'pointer'
    };

    return (
      <div style={style} onClick={() => this.markerClick()}></div>
    );
  }
}

export default Marker;
