export const Text = {
  tc: {textAlign: 'center'},
  tr: {textAlign: 'right'},
  tl: {textAlign: 'left'},
  tj: {textAlign: 'justify'},

  tvt: {textAlignVertical: 'top'},
  tvb: {textAlignVertical: 'bottom'},
  tvc: {textAlignVertical: 'center', includeFontPadding: false},

  ttn: {textTransform: 'none'},
  ttu: {textTransform: 'uppercase'},
  ttl: {textTransform: 'lowercase'},
  ttc: {textTransform: 'capitalize'},

  bold: {fontWeight: 'bold'},
  italic: {fontStyle: 'italic'},
  underline: {textDecorationLine: 'underline'},
  through: {textDecorationLine: 'line-through'},
  underlineThrough: {textDecorationLine: 'underline line-through'},

  b: {fontWeight: 'bold'},
  i: {fontStyle: 'italic'},
  u: {textDecorationLine: 'underline'},
}

const FontSizeStyles = {
  fs: 'fontSize',
  lh: 'lineHeight',
}

export function fontSizes(sizes = []) {
  return sizes.reduce((res, s) => {
    Object.entries(FontSizeStyles).forEach(([prefix, styleName]) => {
      res[prefix + s] = {[styleName]: s}
    })
    return res
  }, {})
}
