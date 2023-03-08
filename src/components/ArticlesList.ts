import { styled } from '@nextui-org/react';

export const ArticlesList = styled('ol', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  listStyle: 'none',
  gap: '$12',
  margin: 0,

  '@media (max-width: 1280px)': {
    gridTemplateColumns: '1fr 1fr',
  },

  '@media (max-width: 720px)': {
    gridTemplateColumns: '1fr',
  },
});
