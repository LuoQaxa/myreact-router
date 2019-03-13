import React, { Component } from 'react'
import history from './history';

export default class Link extends Component {
  handleClick(e) {
    const { to } = this.props;
    e.preventDefault();
    history.go(to);
  }
  render() {
    return (
      <a 
        href=""
        onClick={(e) => {this.handleClick(e)}}
      >
        {this.props.children}
      </a>
    )
  }
}
