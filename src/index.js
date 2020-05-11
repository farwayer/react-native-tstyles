import {StyleSheet} from 'react-native'
import {Flex} from './flex'
import {Text, fontSizes} from './text'
import {dimensions} from './dimensions'
import {colors} from './colors'
import {indexes} from './etc'
import memo from './memo'
import {mergeStyles} from './utils'


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
  ...dimensions(DefaultDimensions),
  ...fontSizes(DefaultFontSizes),
  ...indexes(DefaultIndexes),
}

const styles = StyleSheet.create(Basic)
const merge = memo(mergeStyles)

export default Object.assign(merge, styles)

export function createStyles(config = {}) {
  const styles = StyleSheet.create({
    ...Basic,
    ...dimensions(config.dimensions),
    ...fontSizes(config.fontSizes),
    ...indexes(config.indexes),
    ...colors(config.colors),
    ...config.extra,
  })
  const merge = memo(mergeStyles)
  return Object.assign(merge, styles)
}

export cn from './cn'
