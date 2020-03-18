export function mergeStyles(...styles) {
  return flattenExists(styles)
}

function flattenExists(list, res = []) {
  list.forEach(item => {
    if (!item) return

    if (Array.isArray(item)) {
      flattenExists(item, res)
    } else {
      res.push(item)
    }
  })

  return res
}
