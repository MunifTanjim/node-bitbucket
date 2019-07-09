const extractNamespaceFromURL = url => /^\/(\w+)\/?/.exec(url)[1]

module.exports.extractNamespaceFromURL = extractNamespaceFromURL
