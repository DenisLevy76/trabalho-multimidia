import { styled } from '@nextui-org/react';

export const ArticleContainer = styled('main', {
  marginTop: '$12',
  flex: 1,
  paddingBottom: '$24',

  '.container > p:first-child > img': {
    width: '100%',
    maxHeight: '512px',
    objectFit: 'cover',
    borderRadius: '$sm',
  },

  img: {
    borderRadius: '$sm',
  },
});
