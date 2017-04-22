import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import { fitBounds } from 'google-map-react/utils';
import Marker from './Marker';
import mapStyles from './GmapStyles';
import './Gmap.scss';

class Gmap extends Component {
  static propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number,
    markers: PropTypes.array
  };

  static defaultProps = {
    class: 'gmap__wrap',
    center: [6.2442, -75.5812],
    zoom: 1,
    markers: [
      {imgPath: 'images/Bog1.jpg', lat: 4.5981, lng: -74.0767},
      {imgPath: 'images/Bra1.jpg', lat: -25.6886, lng: -54.4391},
      {imgPath: 'images/Buz1.jpg', lat: -22.7817, lng: -41.9002},
      {imgPath: 'images/Cart1.jpg', lat: 10.4206, lng: -75.5479},
      {imgPath: 'images/Cord1.jpg', lat: -31.4234, lng: -64.1862},
      {imgPath: 'images/Flor1.jpg', lat: -27.575, lng: -48.4207}
    ]
  };

  state = {
    markers: [],
    center: [],
    zoom: 0,
    activeMarker: ''
  };

  constructor(props) {
    super(props);


  }

  setBounds() {
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
      width: document.querySelector(`.${this.props.class}`).offsetWidth,
      height: document.querySelector(`.${this.props.class}`).offsetHeight,
    };

    const {center, zoom} = fitBounds(bounds, size);

    this.setState({
      center: center,
      zoom: zoom
    })
  }

  setMarkers() {
    const markers = this.props.markers
      .map((marker, i) => {
        const {imgPath, ...coords} = marker;

        return (
          <Marker key={i} imgPath={imgPath} {...coords} />
        );
      });

    this.setState({
      markers: markers
    });
  }

  createMapOptions() {
    return {
      panControl: true,
      mapTypeControl: false,
      styles: mapStyles
    }
  }

  componentDidMount() {
    this.setBounds();
    this.setMarkers();
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
    return (
      <div className={this.props.class}>
        <GoogleMapReact
          center={this.state.center}
          zoom={this.state.zoom}
          onChange={this._onChange}
          onChildClick={this._onChildClick}
          onChildMouseEnter={this._onChildMouseEnter}
          onChildMouseLeave={this._onChildMouseLeave}
          options={this.createMapOptions}
        >
          {this.state.markers}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Gmap;
