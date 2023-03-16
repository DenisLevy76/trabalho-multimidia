import { ArticleContainer, ArticleWrapper } from './_styles'
import { useEffect, useState } from 'react'
import { Text } from '@nextui-org/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { ghostAPI } from '../../../lib/axios'
import { IPost } from '../../../@types/IPost'

export default function Home() {
  const router = useRouter()
  const { articleId } = router.query

  const [post, setPost] = useState<IPost | null>(null)
  const stripHTMLRegex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi
  const postHTML = post ? post.html.replace(stripHTMLRegex, '') : ''

  const getPost = async () => {
    try {
      const { data } = await ghostAPI.get<{ posts: IPost[] }>(
        `/posts/slug/${articleId}`,
        {
          params: {
            include: 'authors,tags',
          },
        }
      )

      if (data.posts.length > 0) setPost(data.posts[0])
    } catch (error) {
      router.replace('/404')
    }
  }

  useEffect(() => {
    if (articleId) getPost()
  }, [articleId])

  return (
    <ArticleContainer>
      {post && (
        <Image
          src={post.feature_image}
          alt={post.feature_image_alt}
          width={1980}
          height={1080}
          quality={100}
          className='banner'
        />
      )}
      <ArticleWrapper className='container'>
        {post && (
          <>
            <Text as='h1'>{post.title}</Text>
            <article dangerouslySetInnerHTML={{ __html: postHTML }}></article>
          </>
        )}
      </ArticleWrapper>
    </ArticleContainer>
  )
}
