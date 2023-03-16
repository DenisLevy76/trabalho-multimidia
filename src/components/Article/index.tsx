import { Card, Text, Row, Col, Avatar } from '@nextui-org/react'
import dayjs from 'dayjs'
import Link from 'next/link'
import { IPost } from '../../@types/IPost'
import {
  ArticleDescription,
  ArticleMetadata,
  ArticleTitle,
} from '../Article/styles'

export interface ArticleComponentProps {
  post: IPost
}

export const ArticleComponent: React.FC<ArticleComponentProps> = ({
  post: {
    excerpt,
    feature_image,
    feature_image_alt,
    title,
    slug,
    published_at,
    authors,
  },
}) => {
  const author = authors[0]
  return (
    <Link href={`/articles/${slug}`}>
      <Card
        isPressable
        isHoverable
        css={{
          boxShadow: '-1px 1px 32px 0px #3B82F632',
          '-webkit-box-shadow': '-1px 1px 32px 0px #3B82F632',
          '-moz-box-shadow': '-1px 1px 32px 0px #3B82F632',
        }}
      >
        <Avatar
          squared
          src={author.profile_image}
          css={{ position: 'absolute', left: '$4', top: '$4' }}
          title={`Publicado por ${author.name}`}
        />

        <Card.Body css={{ p: 0 }}>
          {!!feature_image && (
            <Card.Image
              src={feature_image}
              objectFit='cover'
              width='100%'
              height={280}
              alt={feature_image_alt}
            />
          )}
        </Card.Body>
        <Card.Footer
          css={{
            justifyItems: 'flex-start',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <ArticleTitle
            h2
            size='$xl'
          >
            {title}
          </ArticleTitle>
          <ArticleDescription
            css={{
              color: '$accents7',
              fontWeight: '$semibold',
              fontSize: '$md',
            }}
          >
            {excerpt}
          </ArticleDescription>
          <ArticleMetadata>
            <Text
              as={'time'}
              size='$sm'
            >
              {dayjs(published_at).fromNow()}
            </Text>
            <Text size='$sm'>•</Text>
            <Text size='$sm'>Por {author.name}</Text>
          </ArticleMetadata>
        </Card.Footer>
      </Card>
    </Link>
  )
}
