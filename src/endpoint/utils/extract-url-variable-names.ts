const urlVariableRegex = /\{[^}]+\}/g

function removeNonChars(variableNameMatch: string): string[] {
  return variableNameMatch.replace(/^\W+|\W+$/g, '').split(/,/)
}

export function extractUrlVariableNames(url: string): string[] {
  const matches = url.match(urlVariableRegex)

  if (!matches) {
    return []
  }

  return matches
    .map(removeNonChars)
    .reduce((a: string[], b): string[] => a.concat(b), [])
}
