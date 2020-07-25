import {StyleSheet} from 'react-native'
import {Flex} from './flex'
import {Text, fontSizes} from './text'
import {Image} from './image'
import {dimensions} from './dimensions'
import {colors} from './colors'
import {indexes} from './etc'
import {mergeStyles} from './utils'
import memo from './memo'
import cnForSheet from './cn'


const DefaultDimensions = [
  1, 2, 4, 8, 12, 16, 20, 24, 32, 40, 44, 48, 56, 64, 72, 96,
  128, 160, 192,
  240, 256, 288, 320, 480, 512,
]
const DefaultFontSizes = [...Array(49).keys()]
const DefaultIndexes = [...Array(11).keys()]

const Basic = {
  ...Flex,
  ...Text,
  ...Image,
  ...dimensions(DefaultDimensions),
  ...fontSizes(DefaultFontSizes),
  ...indexes(DefaultIndexes),
}

export default create(Basic)

export function createStyles(config = {}) {
  return create({
    ...Basic,
    ...dimensions(config.dimensions),
    ...fontSizes(config.fontSizes),
    ...indexes(config.indexes),
    ...colors(config.colors),
    ...config.styles,
  })
}

function create(styles) {
  const sheet = StyleSheet.create(styles)
  const merge = memo(mergeStyles(sheet))
  merge.cn = cnForSheet(sheet)
  return Object.assign(merge, sheet)
}
