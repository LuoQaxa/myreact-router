// 历史记录
// 这就是最常见的设计模式，先绑定，后触发
class History {
  constructor() {
    this._bindPopState();
    this.routes = [];
    // []
  }
  // 什么时候注册
  
  go(path) {
    history.pushState({path: path}, null, path);
    this.routes[path] && this.routes[path]();
  }
  
  /**
   * 监听浏览器的变化
   */
  _bindPopState() {
    window.addEventListener('popstate', e => {
      console.log('popstate run')
      const path = e.state && e.state.path;
      this.routes[path] && this.routes[path]();
    });
  }
}

export default new History();