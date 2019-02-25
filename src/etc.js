const DefaultIndexes = [...Array(11).keys()];


export default function init(indexes = []) {
  indexes = indexes.concat(DefaultIndexes);

  return indexes.reduce((res, i) => {
    res[`el${i}`] = {elevation: i};
    res[`z${i}`] = {zIndex: i};
    return res;
  }, {})
}
