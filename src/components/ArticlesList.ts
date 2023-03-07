import { styled } from '@nextui-org/react';

export const ArticlesList = styled('ol', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  listStyle: 'none',
  gap: '$6',
  margin: 0,

  '@media (max-width: 900px)': {
    gridTemplateColumns: '1fr 1fr',
  },

  '@media (max-width: 450px)': {
    gridTemplateColumns: '1fr',
  },
});
