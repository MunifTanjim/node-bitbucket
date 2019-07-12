export function pick<T, K extends keyof T>(object: T, keys: K[]): Pick<T, K> {
  return keys.reduce((newObject: Partial<T>, key): Partial<T> => {
    if (typeof object[key] !== 'undefined') {
      newObject[key] = object[key]
    }
    return newObject
  }, {}) as Pick<T, K>
}
