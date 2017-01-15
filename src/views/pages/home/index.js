import { List } from 'immutable';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';



export class Home extends Component {

  render() {
    return (
      <div className="g-row">
        <div className="g-col">
          <h1>HOME</h1>
        </div>

      </div>
    );
  }
}


export default Home;