import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

class Gmap extends Component {
  static propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number,
    markers: PropTypes.array
  };

  static defaultProps = {
    center: [6.2442, -75.5812],
    zoom: 9,
    markers: [
      {text: 'Test 1', lat: 6.2442, lng: -75.5812},
      {text: 'Test 2', lat: 6.3442, lng: -75.5812},
      {text: 'Test 3', lat: 6.4442, lng: -75.5812}
    ]
  };

  constructor() {
    super();

    this.state = {
      activeMarker: ''
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  _onChange({center, zoom, bounds, ...other}) {
    // console.log('onChange');
  }

  _onChildClick(key, childProps) {
    // console.log(childProps);
    // console.log('onChildClick');
  }

  _onChildMouseEnter(key, childProps) {
    // console.log('onChildMouseEnter');
  }

  _onChildMouseLeave() {
    // console.log('onChildMouseLeave');
  }

  render() {
    const markers = this.props.markers
      .map((marker, i) => {
        const {text, ...coords} = marker;

        return (
          <Marker
            key={i}
            {...coords}
            text={text}
          />
        );
      });

    return (
      <div className="gmap__wrap" style={{position: 'absolute', width: '100%', height: '100%'}}>
        <GoogleMapReact
          center={this.props.center}
          zoom={this.props.zoom}
          onChange={this._onChange}
          onChildClick={this._onChildClick}
          onChildMouseEnter={this._onChildMouseEnter}
          onChildMouseLeave={this._onChildMouseLeave}
        >
          {markers}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Gmap;
