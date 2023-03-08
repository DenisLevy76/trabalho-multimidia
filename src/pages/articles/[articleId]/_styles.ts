import { styled } from '@nextui-org/react';

export const ArticleContainer = styled('main', {
  marginTop: '$12',
  backgroundImage:
    'linear-gradient(0deg, rgba(59,130,246,0.1) 0%, rgba(0,255,231,0) 100%)',
  flex: 1,

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
