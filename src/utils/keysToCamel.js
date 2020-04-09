const toCamel = (s) => {
  return s.replace(/([-_][a-z])/gi, ($1) => {
    return $1.toUpperCase().replace('-', '').replace('_', '');
  });
};

const isArray = function (arr) {
  return Array.isArray(arr);
};

const isObject = function (obj) {
  return obj === Object(obj) && !isArray(obj) && typeof obj !== 'function';
};

export const keysToCamel = function (element) {
  if (isObject(element)) {
    const convertedCamelCaseObj = {};
    Object.keys(element).forEach((key) => {
      convertedCamelCaseObj[toCamel(key)] = keysToCamel(element[key]);
    });
    return convertedCamelCaseObj;
  } else if (isArray(element)) {
    return element.map((value) => {
      return keysToCamel(value);
    });
  }
  return element;
};
