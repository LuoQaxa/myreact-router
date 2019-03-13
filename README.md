# myreact-router
实现一个自己的react-router4

## react-router4设计思想
不再是静态的路由配置，而是每一个route组件做单独的路由渲染，是真正的动态路由

## 实现react-router-dom


### todo
一个简单的react-start, 提供简单的开发功能

### 坑
监听popstate事件：当活动历史条目更改时，会触发。而需要注意的是调用history.pushState()或history.replaceState()不会触发popstate事件。只有在做出浏览器动作时，才会触发该事件，如用户点击浏览器的回退按钮（或者在Javascript代码中调用history.back()）时才会触发。