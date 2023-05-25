import fs from 'node:fs'
import path from 'node:path'

export default function readFilesRecursively(dir) {
  let results = []
  const files = fs.readdirSync(dir)

  files.forEach((file) => {
    const filePath = path.join(dir, file)
    if (fs.statSync(filePath).isDirectory()) {
      results = results.concat(readFilesRecursively(filePath))
    } else if (path.extname(file).includes('.md')) {
      results.push(filePath)
    }
  })
  return results
}
