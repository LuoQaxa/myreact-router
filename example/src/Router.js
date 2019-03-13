// router 是一个顶层的组件，包裹着所有的route组件
// 它的工作是什么？监听浏览器地址的变化,变化后如何更新component呢？
// 只要发生变化就重新render子组件
// path 通过 context传递

 import React, { Component } from 'react';
 import history from './history';
 import RouterContext from './RouterContext';
 
 export default class BrowserRouter extends Component {
   constructor(props) {
     super(props);
     this.state = {
       // 当前页面的path
       path: '/'
     }
   }

   componentDidMount() {
    history._bindPopState();
   }
   
   render() {
     const { path } = this.state;
     return (
       <RouterContext.Provider
       // 需要传递给子组件的值
        value={{
          path
        }}
       >
         {this.props.children}
       </RouterContext.Provider>
     )
   }
 }
 