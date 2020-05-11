export function indexes(sizes = []) {
  return sizes.reduce((res, i) => {
    res[`el${i}`] = {elevation: i}
    res[`z${i}`] = {zIndex: i}
    return res
  }, {})
}
