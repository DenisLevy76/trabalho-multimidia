import { styled } from '@nextui-org/react';
import { Text } from '@nextui-org/react';

export const MainContent = styled('main', {
  backgroundImage: 'url(/backgroundhero.svg)',
  minHeight: '100vh',
  backgroundPosition: 'top center',
  backgroundRepeat: 'no-repeat',
});

export const HeroSection = styled('section', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  textAlign: 'left',

  '@media (max-width: 850px)': {
    gridTemplateColumns: '1fr',
    textAlign: 'center',

    img: {
      display: 'none',
    },
  },
});

export const HeroSectionText = styled('article', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const HeroTitle = styled(Text, {
  background: 'linear-gradient(93.54deg, #3B82F6 9.03%, #D946EF 43.88%)',
  backgroundClip: 'text',
  '-webkit-background-clip': 'text',
  color: 'transparent !important',
  lineHeight: '130%',
});

export const LastArticles = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '$12',
  width: '100%',

  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});
