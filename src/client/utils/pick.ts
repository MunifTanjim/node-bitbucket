export function pick<T, K extends keyof T>(object: T, keys: K[]): Pick<T, K> {
  return keys.reduce(
    (newObject, key) => {
      if (typeof object[key] !== 'undefined') newObject[key] = object[key]
      return newObject
    },
    {} as any
  )
}
