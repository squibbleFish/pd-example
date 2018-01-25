import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { Link, withRouter } from 'react-router-dom';

import * as actions from '../actions/theme-actions';
import SearchBar from './search-bar';
import { Spinner } from '../components/spinner';
import './dashboard.css';

class Dashboard extends Component {
  /**
   *
   * @param props
   */
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: false,
    };
  }

  /**
   *
   * @returns {Promise<void>}
   */
  componentWillMount() {
    this.props.getThemes();
  }

  /**
   * Check to make sure our data is back
   * @param nextProps
   */
  componentWillReceiveProps(nextProps) {
    if (!_.isEmpty(nextProps.themes.themes)) {
      this.setState({
        loading: false
      })
    }
    // Check for any errors and render the error
    if (nextProps.themes.error) {
      this.setState({
        error: true
      }, () => {
        // We could throw to a log on the server if need be
        console.log(nextProps.themes.trace);
      })
    }
  }

  /**
   *
   * @returns {*}
   */
  render() {
    const { themes } = this.props;
    /**
     * Map the themes
     * @type {string}
     */
    const dash = !_.isEmpty(themes) ? themes.themes.map((theme) => {
      const owner = theme.owner === '_default' ? '' : theme.owner;
      return(
        <div
          className="theme-card"
          key={ theme.guid } >
          {
            this.state.error ?
              <div className="error">There was an error. Please try again</div> : ''
          }
          <h4>
            { theme.title }
            <span className={ `theme-type ${ theme.owner }`} />
          </h4>
          <p>{ !_.isEmpty(owner) ? `Owner : ${ owner }` : '' }</p>
          <Link
            to={{
              pathname: `/theme/${ theme.guid }`,
              state: { theme }
            }}
            className="btn preview" >
            Preview Theme
          </Link>
        </div>
      )
    }) : '';

    return(
      <React.Fragment>
        <SearchBar
          themes={themes.themes} />
        <div
          className="theme-board" >
          {
            this.state.loading ? <Spinner /> : dash // Either of these could be components, but this is just slightly easier
          }
        </div>
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    themes: state.themes
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

Dashboard.propTypes = {
  getThemes: PropTypes.func,
  themes: PropTypes.object,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps, null, { withRef: true})(Dashboard));