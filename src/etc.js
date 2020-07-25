const Styles = {
  el: 'elevation',
  z: 'zIndex',
}

export function indexes(indexes = []) {
  return indexes.reduce((res, i) => {
    Object.entries(Styles).forEach(([prefix, styleName]) => {
      res[prefix + i] = {[styleName]: i}
    })

    return res
  }, {})
}
