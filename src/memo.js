export default function memo(fn) {
  const cache = new Cache()

  return (...args) => {
    const argsCache = args.reduce((cache, arg) => (
      cache.get(arg) ||
      cache.set(arg, new Cache())
    ), cache)

    return argsCache.hasOwnProperty('result')
      ? argsCache.result
      : argsCache.result = fn(...args)
  }
}

class Cache {
  _map = new Map()
  _weakMap = new WeakMap()

  set(key, val) {
    this._getStore(key).set(key, val)
    return val
  }

  get(key) {
    return this._getStore(key).get(key)
  }

  _getStore(key) {
    return isObjLike(key) ? this._weakMap : this._map
  }
}

function isObjLike(val) {
  if (val === null) return false
  const type = typeof val
  return type === 'object' || type === 'function'
}
