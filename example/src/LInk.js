import React, { Component } from 'react'
import history from './history';

export default class Link extends Component {
  handleClick(e) {
    const { to } = this.props;
    e.preventDefault();
    history.go(to);
    // 点击了link之后，没有更新视图
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
