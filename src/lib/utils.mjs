export const throttle = (f, t = 300) => {
  let waiting = false
  return (...args) => {
    if (waiting) return
    f(...args)
    waiting = true
    setTimeout(() => {waiting = false}, t)
  }
}
export const debounce = (f, t = 100) => {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => { f.apply(this, args) }, t)
  }
}