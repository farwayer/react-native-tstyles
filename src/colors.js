export default function init(colors = {}) {
  return Object.entries(colors).reduce((res, [name, color]) => {
    name = capitalize(name);
    res[`bg${name}`] = {backgroundColor: color};
    res[`bc${name}`] = {borderColor: color};

    name = decapitalize(name);
    res[name] = {color};

    return res;
  }, {})
};

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function decapitalize(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}
