const urlVariableRegex = /\{[^}]+\}/g

function removeNonChars(variableNameMatch: string) {
  return variableNameMatch.replace(/^\W+|\W+$/g, '').split(/,/)
}

export function extractUrlVariableNames(url: string) {
  const matches = url.match(urlVariableRegex)

  if (!matches) {
    return []
  }

  return matches.map(removeNonChars).reduce((a, b) => a.concat(b), [])
}
