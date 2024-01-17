import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Ecomerce Project',
  apiVersion:'2022-03-07',
  projectId: '0iqcprci',
  dataset: 'production',
  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  "cors": {
    "origins": ["https://your-nextjs-app.vercel.app", "http://localhost:3000"]
  },
})
