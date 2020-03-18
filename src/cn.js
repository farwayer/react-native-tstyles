import memo from './memo'
import {mergeStyles} from './utils'


const merge = memo(mergeStyles)

export default function cn(...args) {
  const styles = args
    .map(([active, onStyles, offStyles]) => active ? onStyles : offStyles)

  return merge(...styles)
}
