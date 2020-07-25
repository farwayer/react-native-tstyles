import {capitalize, decapitalize} from './utils'


const ColorStyles = {
  bg: 'backgroundColor',
  bc: 'borderColor',
}

export function colors(colors = {}) {
  return Object.entries(colors).reduce((res, [name, color]) => {
    name = decapitalize(name)
    res[name] = {color}

    name = capitalize(name)
    Object.entries(ColorStyles).forEach(([prefix, styleName]) => {
      res[prefix + name] = {[styleName]: color}
    })

    return res
  }, {})
}
