# React Native TStyles

_Tachyons-like styles for React Native_

**Be care: project is WIP and API can change before v1 release.**

```js
import styles from 'react-native-tstyles'

const s = styles({
  dimensions: [14], // extra, default in dimensions.js
  fontSizes: [56], // extra, default 0-48
  indexes: [14], // for zIndex and elevation; extra, default 0-10
  colors: {
    White: '#ffffff',
    Purple: '#6963d6',
  },
});

function ViewWithText({text}) {
  /* View styles: {
    marginHorizontal: 16,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: '#ffffff',
  } */
  
  /* Text styles: {
    fontWeight: 'bold',
    color: '#6963d6',
  } */
  
  return (
     <View style={[s.mh16, s.f1, s.row, s.jcfe, s.bgWhite]}>
       <Text style={[s.bold, s.purple]}>
         {text}
       </Text>
     </View>   
  )
}
```
