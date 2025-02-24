import { type SchemaTypeDefinition } from 'sanity'
import { article } from './article.schema'
import { richText, simpleRichText } from './objects/rich-text/rich-text.schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [article, richText, simpleRichText],
}
