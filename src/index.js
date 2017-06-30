import { camelToKebabCase } from './utils'
module.exports = function() {
  return {
    visitor: {
      JSXAttribute: function(node) {
        node.node.name.name = camelToKebabCase(node.node.name.name)
      },
    },
  }
}
