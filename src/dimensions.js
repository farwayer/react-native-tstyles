const Default = [
  1, 2, 4, 8, 12, 16, 24, 32, 40, 44, 48, 56, 64, 72, 96,
  128, 160, 192,
  240, 256, 288, 512,
];


export default function init(dimensions = []) {
  dimensions = dimensions.concat(
    Default,
    dimensions.map(d => -d),
    0, undefined,
  );

  return dimensions.reduce((res, d) => {
    const p = d !== undefined
      ? (d >= 0 ? d : `_${-d}`)
      : 'None';

    res[`m${p}`] = {margin: d};
    res[`mt${p}`] = {marginTop: d};
    res[`mb${p}`] = {marginBottom: d};
    res[`ml${p}`] = {marginLeft: d};
    res[`mr${p}`] = {marginRight: d};
    res[`mv${p}`] = {marginVertical: d};
    res[`mh${p}`] = {marginHorizontal: d};

    res[`p${p}`] = {padding: d};
    res[`pt${p}`] = {paddingTop: d};
    res[`pb${p}`] = {paddingBottom: d};
    res[`pl${p}`] = {paddingLeft: d};
    res[`pr${p}`] = {paddingRight: d};
    res[`pv${p}`] = {paddingVertical: d};
    res[`ph${p}`] = {paddingHorizontal: d};

    res[`l${p}`] = {left: d};
    res[`r${p}`] = {right: d};
    res[`t${p}`] = {top: d};
    res[`b${p}`] = {bottom: d};

    res[`h${p}`] = {height: d};
    res[`w${p}`] = {width: d};

    res[`minh${p}`] = {minHeight: d};
    res[`minw${p}`] = {minWidth: d};
    res[`maxh${p}`] = {maxHeight: d};
    res[`maxw${p}`] = {maxWidth: d};

    res[`br${p}`] = {borderRadius: d};
    res[`btlr${p}`] = {borderTopLeftRadius: d};
    res[`btrr${p}`] = {borderTopRightRadius: d};
    res[`bblr${p}`] = {borderBottomLeftRadius: d};
    res[`bbrr${p}`] = {borderBottomRightRadius: d};
    res[`bw${p}`] = {borderWidth: d};
    res[`btw${p}`] = {borderTopWidth: d};
    res[`bbw${p}`] = {borderBottomWidth: d};
    res[`blw${p}`] = {borderLeftWidth: d};
    res[`brw${p}`] = {borderRightWidth: d};

    return res;
  }, {});
}
