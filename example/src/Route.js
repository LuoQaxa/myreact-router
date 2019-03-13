import React, { Component } from 'react';
import RouterContext from './RouterContext';
console.log(RouterContext);

export default class Route extends Component {
  // 获取到当前的path,如果当前的path等于当前路由的path就进行渲染
  render() {
    const { path, component } = this.props;
    return (
      <RouterContext.Consumer>
        {/* {
          (value) => {
            console.log('Consumer value is', value);
            return (
              React.createElement(component)
            )
          }
        } */}
      </RouterContext.Consumer>
    )
  }
}
