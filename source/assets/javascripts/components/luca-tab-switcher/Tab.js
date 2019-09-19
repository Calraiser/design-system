import React, { Component } from 'react';

import PropTypes from 'prop-types';

export default class Tab extends Component {
  constructor(props) {
    super(props);
    this.onTabClick = this.onTabClick.bind(this);
  }

  onTabClick() {
    this.props.handleTabClick(this.props.tabIndex);
  }
  render() {
    const { label, id, isActive, handleTabClick } = this.props;

    return (
      <button
        id= { this.props.id }
        className= { this.props.isActive ? 'tab-switcher__active' : '' }
        onClick= { this.onTabClick }
      >
        { label }
      </button>
    );
  }
}


Tab.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};
