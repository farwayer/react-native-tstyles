const DefaultFontSizes = [...Array(49).keys()];
const Text = {
  tc: {textAlign: 'center'},
  tr: {textAlign: 'right'},
  tl: {textAlign: 'left'},
  tvt: {textAlignVertical: 'top'},
  tvb: {textAlignVertical: 'bottom'},
  tvc: {textAlignVertical: 'center', includeFontPadding: false},

  bold: {fontWeight: 'bold'},
  italic: {fontStyle: 'italic'},
  underline: {textDecorationLine: 'underline'},
  through: {textDecorationLine: 'line-through'},
  underlineThrough: {textDecorationLine: 'underline line-through'},
};


export default function init(fontSizes = []) {
  fontSizes = fontSizes.concat(DefaultFontSizes);

  return fontSizes.reduce((res, s) => {
    res[`fs${s}`] = {fontSize: s};
    return res;
  }, Text);
}
