# React Native TStyles

_Tachyons-like styles for React Native_

**Be care: project is WIP and API can change before v1 release.**

There are two possible options: using default styles or init with custom config. 

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
    <View style={[s.mh16, s.f1, s.row, s.jcfe]}>
      ...
    </View>
  )  
}
```

### Init with custom config

#### styles.js

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
  extra: {
    boldItalic: {
      fontWeight: 'bold',
      fontStyle: 'italic', 
    },
  },
})
```

#### view-with-text.js

```js
import s from 'styles'

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
     <View style={[s.mh14, s.f1, s.row, s.jcfe, s.bgWhite]}>
       <Text style={[s.boldItalic, s.fs56, s.purple]}>
         {text}
       </Text>
     </View>   
  )
}
```
