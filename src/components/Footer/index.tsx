import { Card, Text, Row } from '@nextui-org/react'
import Image from 'next/image'
import { ContainerComponent } from '../container'
import { FooterContainer } from '../Footer/styles'

export const Footer = () => (
  <FooterContainer
    variant='bordered'
    as='footer'
  >
    <ContainerComponent>
      <Card.Body>
        <Row
          justify='space-between'
          align='center'
        >
          <Text>
            Feito com 💖 por{' '}
            <a
              href='https://github.com/DenisLevy76'
              target='_blank'
              rel='noopener noreferrer'
            >
              Denis Levy
            </a>
          </Text>
          <a
            href='https://github.com/DenisLevy76/trabalho-multimidia'
            target='_blank'
            rel='noopener noreferrer'
            title='Ir para o github do projeto'
            aria-label='Ir para o github do projeto'
          >
            <Image
              src='/githublogo.svg'
              alt='Logo github'
              width={24}
              height={24}
            />
          </a>
        </Row>
      </Card.Body>
    </ContainerComponent>
  </FooterContainer>
)
