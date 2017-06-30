const testAttribute = (attr, prefix = 'aria-') => {
  const regEx = new RegExp(`^${prefix}`, 'i')
  return attr.match(regEx) && true
}

// turn aria-required to ariaRequired
const kebapToCamelCase = (str, prefix = 'aria-') => {
  const regEx = new RegExp(`^${prefix}`, 'i')
  if (str.match(regEx)) {
    str = str
      .split('-')
      .reduce(
        (prev, next) =>
          prev +
          next
            .split('')
            .map((char, index) => (!index ? char.toUpperCase() : char))
            .join(''),
      )
  }
  return str
}

// turn ariaRequired to aria-required
const camelToKebabCase = str => {
  let newStr = str
    .replace(/-/g, '')
    .split('')
    .map(
      char => (char === char.toUpperCase() ? '-' + char.toLowerCase() : char),
    )
    .join('')
    .replace(/(^-{1,}|-{1,}$)/gi, '')
  return testAttribute(newStr) ? newStr : str
}

export { camelToKebabCase }
