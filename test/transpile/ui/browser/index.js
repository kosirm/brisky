// const include = require('../../include')

module.exports = {
  id: 'browser',
  createElement: (status, id, type) => {
    // type / tag
    // status.functions
    console.log('createElement', id, type)
    return `var _${id} = tree._[${id}] = document.createElement('${type}')`
  },
  removeChild: (status, id, childId) => {
    console.log('removeElement')
  },
  createText: (status, id, val) => {
    console.log('createText')
  },
  updateText: (status, id, val) => {
    console.log('updateText')
  },
  addChild: (status, id, childId) => {
    // include(status, 'fn')
    return `_${id}.appendChild(_${childId})`
  }
}