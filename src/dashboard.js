import React, { Component } from 'react';
import Request from 'axios';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { BASE } from './config';
import './dashboard.css';

/**
 * API URL
 * @type {string}
 */
const API = `${BASE}/api/theme`;
/**
 * API token
 * @type {string}
 */
const TOKEN = '15151ca0-ffbf-4c13-ac7d-89b5e89a417c';

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
      themes: {}
    };
  }

  /**
   * Async function to grab the dataset.
   * @returns {Promise<void>}
   */
  async componentDidMount() {
    // Fetch data from the API
    try {
      const { data } = await Request.get(API, {
        headers: { 'Authorization': `Bearer ${ TOKEN }` }
      });
      await this.setThemes({themes: data.rows});
      this.setState({
        loading: false
      });
    } catch (e)  {
      console.log(e); // The stacktrace could be sent to a log on the server if need be
      this.setState({
        error: true
      });
    }
  }

  /**
   * Once themes have been returned set them in the state
   * @param state
   * @returns {Promise<any>}
   */
  setThemes(state) {
    return new Promise((resolve) => {
      this.setState(state, resolve)
    });
  }

  /**
   *
   * @returns {*}
   */
  render() {
    /**
     * Map the themes
     * @type {string}
     */
    const themes = !_.isEmpty(this.state.themes) ? this.state.themes.map((theme, i) => {
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
            <span className={ `theme-type ${theme.owner}`} />
          </h4>
          <p>
            {
              !_.isEmpty(owner) ? `Owner : ${owner}` : ''
            }
          </p>
          <Link
            to={{
              pathname: `/theme/${theme.guid}`,
              state: { theme }
            }}
            className="btn preview" >
            Preview Theme
          </Link>
        </div>
      )
    }) : '';
    const spinner = <div className="spinner" />;
    return(
      <div className="theme-board">
        {
          this.state.loading ? spinner : themes
        }
      </div>
    )
  }
}

export default Dashboard;