import {isStr, isArr} from 'istp'


export function mergeStyles(sheet) {
  return (...styles) => processStyleList(sheet, styles)
}

function processStyleList(sheet, styles, res = []) {
  return styles.reduce((res, style) => {
    if (!style) return res

    if (isStr(style)) {
      style = style.split(' ').map(name => sheet[name])
    }

    if (isArr(style)) {
      return processStyleList(sheet, style, res)
    }

    res.push(style)
    return res
  }, res)
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function decapitalize(str) {
  return str.charAt(0).toLowerCase() + str.slice(1)
}
