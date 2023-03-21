import * as dotenv from 'dotenv'
import algoliasearch from 'algoliasearch'
import parseMarkdownFiles from './utils/parse-markdown-files.js'
import readFilesRecursively from './utils/read-files-recursively.js'

dotenv.config()

const CONTENT_DIR = './src/pages'
const { ALGOLIA_APP_ID, ALGOLIA_API_KEY, ALGOLIA_INDEX_NAME } = process.env
const client = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY)
const index = client.initIndex(ALGOLIA_INDEX_NAME)

async function sendIndexToAlgolia(data) {
  try {
    await index.saveObjects(data, { autoGenerateObjectIDIfNotExist: true })
    console.log('Successfully indexed Treblle docs content to Algolia!')
  } catch (error) {
    console.error('Error indexing Treblle docs content to Algolia:', error)
  }
}

const files = readFilesRecursively(CONTENT_DIR)
const parsedData = parseMarkdownFiles(files, CONTENT_DIR)

sendIndexToAlgolia(parsedData)
