import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import { fitBounds } from 'google-map-react/utils';
import Marker from './Marker';

class Gmap extends Component {
  static propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number,
    markers: PropTypes.array
  };

  static defaultProps = {
    center: [6.2442, -75.5812],
    zoom: 1,
    markers: [
      {text: 'Test 1', lat: 6.2442, lng: -75.4812},
      {text: 'Test 2', lat: 6.3442, lng: -75.5512},
      {text: 'Test 3', lat: 6.4442, lng: -75.6912}
    ]
  };

  constructor() {
    super();

    this.state = {
      center: [6.2442, -75.5812],
      zoom: 1,
      activeMarker: ''
    };
  }

  setBounds() {
    // Set lng/lat max/min
    const latMax = Math.max(...this.props.markers.map(val => val.lat));
    const latMin = Math.min(...this.props.markers.map(val => val.lat));
    const lngMax = Math.max(...this.props.markers.map(val => val.lng));
    const lngMin = Math.min(...this.props.markers.map(val => val.lng));

    const bounds = {
      nw: {
        lat: latMax,
        lng: lngMin
      },
      se: {
        lat: latMin,
        lng: lngMax
      }
    };

    const size = {
      width: document.querySelector('.gmap__wrap').offsetWidth, // Map width in pixels
      height: document.querySelector('.gmap__wrap').offsetHeight, // Map height in pixels
    };

    const {center, zoom} = fitBounds(bounds, size);

    this.setState({
      center: center,
      zoom: zoom
    })
  }

  componentDidMount() {
    this.setBounds();
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
          <Marker key={i} text={text} {...coords} />
        );
      });

    return (
      <div className="gmap__wrap" style={{position: 'absolute', width: '100%', height: '100%'}}>
        <GoogleMapReact
          center={this.state.center}
          zoom={this.state.zoom}
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
