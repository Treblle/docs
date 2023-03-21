import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt()

export default function parseMarkdownFiles(files, dir) {
  return files.map((file) => {
    const rawContent = fs.readFileSync(file, 'utf-8')
    const { data, content } = matter(rawContent)
    const htmlContent = md.render(content)

    const filePath = path.relative(dir, file)

    return {
      objectID: filePath,
      title: data.title,
      description: data.description,
      content: htmlContent,
      path: filePath,
    }
  })
}
