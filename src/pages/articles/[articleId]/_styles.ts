import { styled } from '@nextui-org/react';
import { ContainerComponent } from '../../../components/container';

export const ArticleContainer = styled('main', {
  marginTop: '$12',
  flex: 1,
  paddingBottom: '$24',

  '.banner': {
    width: '100%',
    maxHeight: 500,
    objectFit: 'cover'
  },

  article: {
    display: 'flex',
    flexDirection: 'column',
    gap: '$6',
    width: '100%',

    p: {
      fontSize: '$2xl',
    },

    img: {
      borderRadius: '$sm',
      width: '100%',
      height: 'auto'
    },

    iframe: {
      width: '80%',
      height: 520,
      borderRadius: '$sm',
    },
  },

});

export const ArticleWrapper = styled(ContainerComponent, {
  maxWidth: '1080px !important'
})