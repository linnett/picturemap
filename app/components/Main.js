import React, { Component } from 'react';
import Gmap from './Map/Gmap';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      <main className="main">
        <div className="gmap">
          <Gmap />
        </div>
        <aside className="sidebar">
          <h4>SIDEBAR</h4>
        </aside>
      </main>
    );
  }
}

export default Main;
