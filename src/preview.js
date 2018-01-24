import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BASE } from './config';

class Preview extends Component {

  componentDidMount() {

  }

  render() {
    const { location } = this.props;
    const sel = location.state.theme;
    console.log(sel);
    return(
      <div className="theme-preview">
        <section className="flex">
          
        </section>
        <section className="flex frame">
          <iframe src={ `${BASE}/theme/${sel.owner}/${sel.handle}` }/>
        </section>
      </div>
    )
  }
}

Preview.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object,
  match: PropTypes.object,
};

export default Preview;