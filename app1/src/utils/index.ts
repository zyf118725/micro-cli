// 子应用间的跳转
export function appSkip(url: string) {
  window.history.pushState({}, '', url)
}