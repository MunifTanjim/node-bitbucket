function pick(object, keys) {
  return keys.reduce((newObject, key) => {
    if (object[key]) newObject[key] = object[key]
    return newObject
  }, {})
}

module.exports.pick = pick
