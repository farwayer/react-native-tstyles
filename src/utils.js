import {StyleSheet} from 'react-native'
import memo from './memo'


export function create(styles) {
  styles = StyleSheet.create(styles)
  const merge = memo(mergeStyles)
  return Object.assign(merge, styles)
}

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
