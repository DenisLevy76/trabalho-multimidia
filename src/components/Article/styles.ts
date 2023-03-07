import { styled, Text } from '@nextui-org/react';

export const ArticleTitle = styled(Text, {
  display: '-webkit-box',
  '-webkit-line-clamp': 2,
  '-webkit-box-orient': 'vertical',
  overflow: 'hidden',
  'text-overflow': 'ellipsis',
  height: 70,
  width: '100%',
});

export const ArticleDescription = styled(Text, {
  display: '-webkit-box',
  '-webkit-line-clamp': 4,
  '-webkit-box-orient': 'vertical',
  overflow: 'hidden',
  'text-overflow': 'ellipsis',
  height: 98,
  width: '100%',
});
