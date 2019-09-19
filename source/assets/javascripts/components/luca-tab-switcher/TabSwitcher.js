import React, { Component } from 'react';
import Tabs from './Tabs';

export default class TabSwitcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabIndex: 0,
      initialData: [
        {
          label: 'Total',
          id: '1',
        },
        {
          label: 'Activas',
          id: '2',
        },
        {
          label: 'Sin tráfico',
          id: '3',
        },
      ],
    };
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(index) {
    this.setState({
      activeTabIndex: index,
    });
  }

  render() {
    const { initialData, activeTabIndex } = this.state;
    const activeItem = this.state.initialData[activeTabIndex];
    return (
      <div className="luca-tab-switcher">
        <Tabs
          handleTabClick={this.handleTabClick}
          data={this.state.initialData}
          activeTabIndex={activeTabIndex}
        />
      </div>
    );
  }
}
