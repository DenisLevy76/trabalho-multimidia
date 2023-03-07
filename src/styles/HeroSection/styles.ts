import { styled } from '@nextui-org/react';

export const HeroSection = styled('section', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
});

export const HeroSectionText = styled('article', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});
