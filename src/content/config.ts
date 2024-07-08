import { defineCollection } from 'astro:content'
import { docsSchema } from '@astrojs/starlight/schema'

export let collections = {
  docs: defineCollection({ schema: docsSchema() }),
}
