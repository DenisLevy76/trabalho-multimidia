import { Card, Text } from '@nextui-org/react';
import Link from 'next/link';
import { ArticleDescription, ArticleTitle } from '../Article/styles';

export interface ArticleComponentProps {
  title: string;
  description: string;
  img?: string;
}

export const ArticleComponent: React.FC<ArticleComponentProps> = ({
  description,
  img,
  title,
}) => (
  <Link href={`/posts/1`}>
    <Card isPressable>
      <Card.Body css={{ p: 0 }}>
        {!!img && (
          <Card.Image
            src={img}
            objectFit="cover"
            width="100%"
            height={140}
            alt={'orange'}
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
        <ArticleTitle h2 size="$xl">
          {title}
        </ArticleTitle>
        <ArticleDescription
          css={{
            color: '$accents7',
            fontWeight: '$semibold',
            fontSize: '$sm',
          }}
        >
          {description}
        </ArticleDescription>
      </Card.Footer>
    </Card>
  </Link>
);
