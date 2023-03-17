import { Text } from '@nextui-org/react'
import { ContainerComponent } from '../components/container'
import {
  HeroSection,
  HeroSectionText,
  HeroTitle,
  LastArticles,
  MainContent,
} from '../styles/HeroSection/styles'
import Image from 'next/image'
import Link from 'next/link'
import { ArticlesList } from '../components/ArticlesList'
import { ArticleComponent } from '../components/Article'
import { ghostAPI } from '../lib/axios'
import { useEffect, useState } from 'react'
import { IPost } from '../@types/IPost'

export default function Home() {
  const [posts, setPosts] = useState<IPost[] | null>(null)
  const getPosts = async () => {
    try {
      const { data } = await ghostAPI.get('/posts', {
        params: {
          include: 'authors,tags',
        },
      })
      setPosts(data.posts)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getPosts()
  }, [])
  return (
    <MainContent>
      <ContainerComponent>
        <HeroSection>
          <HeroSectionText>
            <HeroTitle
              h1
              size='$6xl'
              weight='bold'
            >
              Aprenda sobre
              <br />o mundo da tecnologia.
            </HeroTitle>
            <Text size='$xl'>
              Artigos gratuitos sobre assustos do curso de ciência da
              computação.
            </Text>
          </HeroSectionText>
          <Image
            src='/illustration4.svg'
            alt='Homem em pé com um notebook na mão'
            width={668}
            height={668}
            title='Illustration by storyset.com by Freepik '
          />
        </HeroSection>
        <LastArticles>
          <header>
            <Text
              h3
              size='$2xl'
              weight='bold'
            >
              Ultimos artigos
            </Text>
            <Link href='/articles'>Ver todos</Link>
          </header>
          <ArticlesList>
            {posts &&
              posts.map((post) => (
                <li>
                  <ArticleComponent post={post} />
                </li>
              ))}
          </ArticlesList>
        </LastArticles>
      </ContainerComponent>
    </MainContent>
  )
}
