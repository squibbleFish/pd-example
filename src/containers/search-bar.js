import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return(
      <section
        className="seach-bar">
        <input
          type="search"
          name="search" />
        <a
          href="#" >
          <span
            className="icon search">
            i
          </span>
        </a>
      </section>
    );
  }
}

export default SearchBar