// router 是一个顶层的组件，包裹着所有的route组件
// 它的工作是什么？监听浏览器地址的变化,变化后如何更新component呢？
// 
 import React, { Component } from 'react'
 
 export default class BrowserRouter extends Component {
   constructor(props) {
     super(props);
     this.state = {
       // 当前页面的path
       path: ''
     }
   }
  //  static state = {
  //    path: ''
  //  }

   componentDidMount() {
    //  监听路由的变化
    window.addEventListener('popstate', () => {
      // 监听路由的变化，之后在回调函数中做什么事情呢，更新当前页面的path
      // 更新后会重新render子路由

    })
   }
   
  //  render() {
  //    return <div>d</div>
  //  }
 }
 