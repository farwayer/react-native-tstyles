import {StyleSheet} from 'react-native'
import flex from './flex'
import dimensions from './dimensions'
import colors from './colors'
import text from './text'
import etc from './etc'


export default function init(config = {}) {
  return StyleSheet.create({
    ...flex(),
    ...dimensions(config.dimensions),
    ...colors(config.colors),
    ...text(config.fontSizes),
    ...etc(config.indexes),
  });
}
