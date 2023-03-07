import Head from 'next/head';
import { Button, styled, Text } from '@nextui-org/react';
import { ContainerComponent } from '../components/container';
import { HeroSection, HeroSectionText } from '../styles/HeroSection/styles';

const MainContent = styled('main', {
  backgroundImage: 'url(/backgroundhero.svg)',
  height: '100vh',
  backgroundPosition: 'top center',
  backgroundRepeat: 'no-repeat',
});

export default function Home() {
  return (
    <MainContent>
      <ContainerComponent>
        <HeroSection>
          <HeroSectionText>
            <Text size="$5xl" weight="bold">
              Olá mundo
            </Text>
          </HeroSectionText>
          <img src="/illustration.png" alt="Pessoa com um computador na mão" />
        </HeroSection>
      </ContainerComponent>
    </MainContent>
  );
}
