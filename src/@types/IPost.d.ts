import { IAuthor } from './IAuthor'

export interface IPost {
  uuid: string
  title: string
  html: string
  feature_image: string
  feature_image_alt: string
  excerpt: string
  slug: string
  published_at: string
  authors: IAuthor[]
}
