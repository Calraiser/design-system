import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {

  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    href: PropTypes.string.isRequired,
  }

  onClick = (event) => {
    const { label, onClick } = this.props;
    onClick(label);

    event.preventDefault();
  }

  render() {
    const {
      onClick,
      props: {
        activeTab,
        label,
        href,
      },
    } = this;

    let className = 'tab-list-item';

    if (activeTab === label) {
      className += ' tab-list-active';
    }

    return (
      <a href={href}
        className={className}
        onClick={onClick}
      >
        {label}
      </a>
    );
  }
}

export default Tab;
