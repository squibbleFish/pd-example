import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';

import * as actions from '../actions/search-actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(e) {
    this.props.searchThemes(e.target.value);
    let filter = _.filter(this.props.themes, t => _.toLower(t.title).includes(e.target.value.toLowerCase()));
    this.props.filterThemes(filter);
  }

  render() {
    return(
      <section
        className="seach-bar">
        <input
          type="search"
          name="search"
          value={ this.props.search.search }
          onChange={ this.handleChange } />
        <a
          href="#" >
        </a>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    search: state.search
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

SearchBar.propTypes = {
  filterThemes: PropTypes.func,
  searchThemes: PropTypes.func,
  search: PropTypes.object,
  themes: PropTypes.array,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(SearchBar))