const DimensionStyles = {
  // margins
  m: 'margin',
  mt: 'marginTop',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mr: 'marginRight',
  mv: 'marginVertical',
  mh: 'marginHorizontal',

  // paddings
  p: 'padding',
  pt: 'paddingTop',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  pr: 'paddingRight',
  pv: 'paddingVertical',
  ph: 'paddingHorizontal',

  // offset
  t: 'top',
  b: 'bottom',
  l: 'left',
  r: 'right',

  // size
  h: 'height',
  w: 'width',
  minh: 'minHeight',
  minw: 'minWidth',
  maxh: 'maxHeight',
  maxw: 'maxWidth',

  // borders
  br: 'borderRadius',
  btlr: 'borderTopLeftRadius',
  btrr: 'borderTopRightRadius',
  bblr: 'borderBottomLeftRadius',
  bbrr: 'borderBottomRightRadius',
  bw: 'borderWidth',
  btw: 'borderTopWidth',
  bbw: 'borderBottomWidth',
  blw: 'borderLeftWidth',
  brw: 'borderRightWidth',
}

export function dimensions(sizes = []) {
  sizes = sizes.concat(
    sizes.map(d => -d),
    0, undefined,
  )

  return sizes.reduce((res, d) => {
    const p = d !== undefined
      ? (d >= 0 ? d : `_${-d}`)
      : 'None'

    Object.entries(DimensionStyles).forEach(([prefix, styleName]) => {
      res[prefix + p] = {[styleName]: d}
    })

    return res
  }, {})
}
