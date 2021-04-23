const btoaLite = (data: string): string => {
  if (typeof Buffer !== 'undefined') {
    return Buffer.from(data).toString('base64')
  }

  return btoa(data)
}

export default btoaLite
