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
    this._store(key).set(key, val)
    return val
  }

  get(key) {
    return this._store(key).get(key)
  }

  _store(key) {
    return isObj(key) ? this._weakMap : this._map
  }
}

function isObj(val) {
  if (val === null) return false
  const type = typeof val
  return type === 'object' || type === 'function'
}
