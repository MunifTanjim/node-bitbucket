const { writeFileSync } = require('fs')
const prettier = require('prettier')

const writeToFile = async (filePath, fileContent) => {
  const options = await prettier.resolveConfig(filePath)

  const formattedContent = prettier.format(fileContent, {
    ...options,
    filepath: filePath,
  })

  writeFileSync(filePath, formattedContent)
}

module.exports.writeToFile = writeToFile
