// 历史记录
// 这就是最常见的设计模式，先绑定，后触发
class History {
  constructor() {
    this._bindPopState();
    this.listens = [];
  }
  // 注册回调
  listen(cb) {
    this.listens.push(cb);
  }

  go(path) {
    history.pushState({path: path}, null, path);
    this.notify(path);
  }
  // 触发回调
  notify(path) {
    this.listens.forEach(listen => {
      listen(path)
    })
  }
  
  /**
   * 监听浏览器的变化
   */
  _bindPopState() {
    window.addEventListener('popstate', e => {
      console.log('popstate run')
      const path = e.state && e.state.path;
      // this.routes[path] && this.routes[path]();
    });
  }
}

export default new History();