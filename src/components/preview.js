import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { THEME_VIEW } from '../helpers/config';

import './preview.css';

class Preview extends Component {
  render() {
    const { location } = this.props;
    const sel = location.state.theme;
    const format = 'MMMM Do YYYY, h:mm:ss';
    const formatTime = (timestamp) => {
      return moment(timestamp).format(format);
    };
    return(
      <div
        className="theme-preview">
        <section
          className="flex">
          <h4>
            Theme Details
          </h4>
          <p>
            <span
              className="bold">Handle: </span>
            { sel.handle }
          </p>
          <p>
            <span
              className="bold">Created: </span>
            { formatTime(sel.created) }
            <br />
            <span
              className="bold">Last Updated: </span>
            { formatTime(sel.last_updated) }
          </p>
          <p className="bold">
            { sel.description }
          </p>
          <p>
            <span
              className="bold">GUID: </span>
            { sel.guid }
          </p>
        </section>
        <section
          className="flex frame">
          <iframe
            src={ `${THEME_VIEW}/${sel.owner}/${sel.handle}` }
            frameBorder="0" />
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