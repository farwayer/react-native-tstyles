import memo from './memo'
import {mergeStyles} from './utils'


export default function cnForSheet(sheet) {
  const merge = memo(mergeStyles(sheet))

  return (...args) => {
    const styles = args.map(cond => {
      const [active, onStyles, offStyles] = cond
      return active ? onStyles : offStyles
    })

    return merge(...styles)
  }
}
