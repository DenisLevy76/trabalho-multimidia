import { Card, Text, Row, Col } from '@nextui-org/react';
import Link from 'next/link';
import {
  ArticleDescription,
  ArticleMetadata,
  ArticleTitle,
} from '../Article/styles';

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
  <Link href={`/articles/1`}>
    <Card
      isPressable
      isHoverable
      css={{
        boxShadow: '-1px 1px 32px 0px #3B82F632',
        '-webkit-box-shadow': '-1px 1px 32px 0px #3B82F632',
        '-moz-box-shadow': '-1px 1px 32px 0px #3B82F632',
      }}
    >
      <Card.Body css={{ p: 0 }}>
        {!!img && (
          <Card.Image
            src={img}
            objectFit="cover"
            width="100%"
            height={280}
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
            fontSize: '$md',
          }}
        >
          {description}
        </ArticleDescription>
        <ArticleMetadata>
          <Text size="$sm">Há 2 horas</Text>
          <Text size="$sm">•</Text>
          <Text size="$sm">Por Denis Levy</Text>
        </ArticleMetadata>
      </Card.Footer>
    </Card>
  </Link>
);
