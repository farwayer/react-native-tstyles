# React Native Tachyons Styles

_Tachyons-like styles for React Native_

[![NPM version](https://img.shields.io/npm/v/react-native-tstyles.svg)](https://www.npmjs.com/package/react-native-tstyles)

**Be care: project is WIP and API can change before v1 release.**

## Configuration

There are two possible options: using default styles or init with a custom
config.

### Default styles

```js
import s from 'react-native-tstyles'

function MyView() {
  /* View styles: {
    marginHorizontal: 16,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  } */
  
  return (
    <View style={s(s.mh16, s.f1, s.row, s.jcfe)}>
      ...
    </View>
  )  
}
```

### Init with custom config

#### ui/styles.js

```js
import {createStyles} from 'react-native-tstyles'

export default createStyles({
  dimensions: [14], // extra, default in dimensions.js
  fontSizes: [56], // extra, default 0-48
  indexes: [14], // for zIndex and elevation; extra, default 0-10
  colors: {
    White: '#ffffff',
    Purple: '#6963d6',
  },
  extra: { // custom extra styles
    boldItalic: {
      fontWeight: 'bold',
      fontStyle: 'italic', 
    },
  },
})
```

#### view-with-text.js

```js
import s from 'ui/styles'

export default function ViewWithText({text}) {
  /* View styles: {
    marginHorizontal: 14,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: '#ffffff',
  } */
  
  /* Text styles: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 56,
    color: '#6963d6',
  } */
  
  return (
     <View style={s(s.mh14, s.f1, s.row, s.jcfe, s.bgWhite)}>
       <Text style={s(s.boldItalic, s.fs56, s.purple)}>
         {text}
       </Text>
     </View>
  )
}
```

## Preventing extra rendering memo'ized and Pure- components

Use `s()` function instead of passing array of styles to `style` prop. It will
take care result `style` property do not change if source styles are the same.
Styles checked by the reference not by the value. So prevent using new js
objects each render time like `s(s.row, {height: 160})`. If you need custom
style than you should create it once and use as function argument
`cn(s.row, heightStyle)`.

If you sure style is different each render time (animations for example)
than skip using `s()` to prevent unnecessary savings to style cache.

## cn() helper: classname alternative for ReactNative

You can use `cn()` helper for conditional styles. 

```js
cn(
  [flag1, onStyles1, offStyles1],
  [flag2, onStyles2, offStyles2],
  ...
)
```

```js
import s, {cn} from 'react-native-tstyles'

function SelectableText({
  enabled,
  selected,
  ...props
}) {
  const textStyle = cn(
    [enabled, s.fs16, s.fs14],   // if enabled than s.fs16 else s.fs14
    [selected, [s.ttu, s.bold]], // if selected than s.ttu and s.bold
  )

  return (
    <Text {...props} style={textStyle}/>
  )
}
```
