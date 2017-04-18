import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Gmap extends Component {
  render() {
    return (
      <div style={{position: 'absolute', width: '100%', height: '100%'}}>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text={'Testing'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

Gmap.propTypes = {
  center: PropTypes.array,
  zoom: PropTypes.number,
  greatPlaceCoords: PropTypes.any
};

Gmap.defaultProps = {
  center: [59.938043, 30.337157],
  zoom: 9,
  greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
};

export default Gmap;
