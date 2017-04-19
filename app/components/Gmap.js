import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import ImageMarkers from './ImageMarkers';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Gmap extends Component {
  static propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number,
    greatPlaceCoords: PropTypes.any
  };

  static defaultProps = {
    center: [59.938043, 30.337157],
    zoom: 9,
    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
  };

  render() {
    return (
      <div style={{position: 'absolute', width: '100%', height: '100%'}}>
        <GoogleMapReact defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
          <ImageMarkers />
          <AnyReactComponent lat={59.955413} lng={30.337844} text={'Testing'} />
          <AnyReactComponent lat={59.855413} lng={30.337844} text={'Testing2'} />
          <AnyReactComponent lat={59.755413} lng={30.337844} text={'Testing3'} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Gmap;
