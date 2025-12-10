import { type SchemaTypeDefinition } from 'sanity'
import { post } from './post'
import { review } from './review'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, review],
}
