import 'dotenv/config'
import { Environment } from 'vitest'

function generateDatabaseURL() {
  if (!process.env.DATABASE_URL) {
    throw new Error('Please provide a DATABASE_URL environment variable')
  }

  return `mongodb+srv://felipetpizzio:7Y7qg5rpq%2A@cluster0.zjcobkn.mongodb.net/test`
}

export default <Environment>{
  name: 'prisma',
  async setup() {
    console.log(generateDatabaseURL())

    return {
      async teardown() {
        console.log('Teardown')
      },
    }
  },
}
