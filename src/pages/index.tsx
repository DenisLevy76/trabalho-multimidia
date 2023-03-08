import { Text } from '@nextui-org/react';
import { ContainerComponent } from '../components/container';
import {
  HeroSection,
  HeroSectionText,
  HeroTitle,
  LastArticles,
  MainContent,
} from '../styles/HeroSection/styles';
import Image from 'next/image';
import Link from 'next/link';
import { ArticlesList } from '../components/ArticlesList';
import { ArticleComponent } from '../components/Article';

export default function Home() {
  return (
    <MainContent>
      <ContainerComponent>
        <HeroSection>
          <HeroSectionText>
            <HeroTitle h1 size="$6xl" weight="bold">
              Aprenda sobre
              <br />o mundo da tecnologia.
            </HeroTitle>
            <Text size="$xl">
              Artigos gratuitos sobre assustos do curso de ciência da
              computação.
            </Text>
          </HeroSectionText>
          <Image
            src="/illustration4.svg"
            alt="Homem em pé com um notebook na mão"
            width={668}
            height={668}
            title="Illustration by storyset.com by Freepik "
          />
        </HeroSection>
        <LastArticles>
          <header>
            <Text h3 size="$2xl" weight="bold">
              Ultimos artigos
            </Text>
            <Link href="/articles">Ver todos</Link>
          </header>
          <ArticlesList>
            <li>
              <ArticleComponent
                img={'https://nextui.org' + '/images/fruit-1.jpeg'}
                title={
                  'What is First Come First Serve Method? What is First Come First Serve Method?What is First Come First Serve Method?'
                }
                description={`First Come First Serve (FCFS) is an operating system scheduling
                algorithm that automatically executes queued requests and processes in
                order of their arrival. It is the easiest and simplest CPU scheduling
                algorithm. In this type of algorithm, processes which requests the CPU
                first get the CPU allocation first. This is managed with a FIFO queue.
                The full form of FCFS is First Come First Serve.`}
              />
            </li>
            <li>
              <ArticleComponent
                img={'https://nextui.org' + '/images/fruit-1.jpeg'}
                title={
                  'What is First Come First Serve Method? What is First Come First Serve Method?What is First Come First Serve Method?'
                }
                description={`First Come First Serve (FCFS) is an operating system scheduling
                algorithm that automatically executes queued requests and processes in
                order of their arrival. It is the easiest and simplest CPU scheduling
                algorithm. In this type of algorithm, processes which requests the CPU
                first get the CPU allocation first. This is managed with a FIFO queue.
                The full form of FCFS is First Come First Serve.`}
              />
            </li>
            <li>
              <ArticleComponent
                img={'https://nextui.org' + '/images/fruit-1.jpeg'}
                title={
                  'What is First Come First Serve Method? What is First Come First Serve Method?What is First Come First Serve Method?'
                }
                description={`First Come First Serve (FCFS) is an operating system scheduling
                algorithm that automatically executes queued requests and processes in
                order of their arrival. It is the easiest and simplest CPU scheduling
                algorithm. In this type of algorithm, processes which requests the CPU
                first get the CPU allocation first. This is managed with a FIFO queue.
                The full form of FCFS is First Come First Serve.`}
              />
            </li>
            <li>
              <ArticleComponent
                img={'https://nextui.org' + '/images/fruit-1.jpeg'}
                title={
                  'What is First Come First Serve Method? What is First Come First Serve Method?What is First Come First Serve Method?'
                }
                description={`First Come First Serve (FCFS) is an operating system scheduling
                algorithm that automatically executes queued requests and processes in
                order of their arrival. It is the easiest and simplest CPU scheduling
                algorithm. In this type of algorithm, processes which requests the CPU
                first get the CPU allocation first. This is managed with a FIFO queue.
                The full form of FCFS is First Come First Serve.`}
              />
            </li>
            <li>
              <ArticleComponent
                img={'https://nextui.org' + '/images/fruit-1.jpeg'}
                title={
                  'What is First Come First Serve Method? What is First Come First Serve Method?What is First Come First Serve Method?'
                }
                description={`First Come First Serve (FCFS) is an operating system scheduling
                algorithm that automatically executes queued requests and processes in
                order of their arrival. It is the easiest and simplest CPU scheduling
                algorithm. In this type of algorithm, processes which requests the CPU
                first get the CPU allocation first. This is managed with a FIFO queue.
                The full form of FCFS is First Come First Serve.`}
              />
            </li>
            <li>
              <ArticleComponent
                img={'https://nextui.org' + '/images/fruit-1.jpeg'}
                title={
                  'What is First Come First Serve Method? What is First Come First Serve Method?What is First Come First Serve Method?'
                }
                description={`First Come First Serve (FCFS) is an operating system scheduling
                algorithm that automatically executes queued requests and processes in
                order of their arrival. It is the easiest and simplest CPU scheduling
                algorithm. In this type of algorithm, processes which requests the CPU
                first get the CPU allocation first. This is managed with a FIFO queue.
                The full form of FCFS is First Come First Serve.`}
              />
            </li>
          </ArticlesList>
        </LastArticles>
      </ContainerComponent>
    </MainContent>
  );
}
