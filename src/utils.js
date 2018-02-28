/**
 * Converts an array of string values into an array of objects with `label` and `value` props
 * @param {string[]} values
 * @returns {Object[]}
 */
export function list2options(values = []) {
  let result = values

  if (values.length > 0 && isString(head(values))) {
    result = values.map(value => ({ label: value, value }))
  }

  return result
}

/**
 * Returns the first item of an array
 * @param {array} arr
 * @returns {*|undefined}
 */
export function head(arr) {
  return arr && arr.length > 0 ? arr[0] : undefined
}

export function isObject(val) {
  const type = typeof val
  // eslint-disable-next-line eqeqeq, no-eq-null
  return val != null && (type == 'object' || type == 'function')
}

export function isString(val) {
  return typeof val === 'string'
}

/**
 * Returns the size/length of an array/object/string
 * @param {*} val
 * @returns {number}
 */
export function size(val = '') {
  if (isObject(val)) {
    return Object.keys(val).length
  } else if (Array.isArray(val)) {
    return val.length
  } else if (isString(val)) {
    return val.trim().length
  }
  return 0
}

export function isEmpty(val) {
  return size(val) === 0
}
