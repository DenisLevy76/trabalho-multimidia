import { Navbar, Text } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import { ToggleButton } from '../Navbar/styles';

export const NavbarComponent = () => (
  <Navbar shouldHideOnScroll isBordered variant={'floating'}>
    <ToggleButton className="toggle" aria-label="toggle navigation" />
    <Navbar.Content hideIn="xs" variant="underline-rounded">
      <Navbar.Link as={Link} isActive href="/">
        Inicio
      </Navbar.Link>
      <Navbar.Link as={Link} href="/articles">
        Artigos
      </Navbar.Link>
      <Navbar.Link as={Link} href="/categories">
        Categorias
      </Navbar.Link>
      <Navbar.Link as={Link} href="/about">
        Sobre
      </Navbar.Link>
    </Navbar.Content>
    <Navbar.Brand>
      <a href="https://www.unama.br/" target="_blank" rel="noopener noreferrer">
        <Image
          src="/unama2.svg"
          alt="Logo marca UNAMA"
          width={142}
          height={42}
        />
      </a>
    </Navbar.Brand>
    <Navbar.Collapse>
      <Navbar.CollapseItem>
        <Link
          color="inherit"
          style={{
            minWidth: '100%',
            color: 'white',
          }}
          href="/"
        >
          Inicio
        </Link>
      </Navbar.CollapseItem>
      <Navbar.CollapseItem>
        <Link
          color="inherit"
          style={{
            minWidth: '100%',
            color: 'white',
          }}
          href="/articles"
        >
          Artigos
        </Link>
      </Navbar.CollapseItem>
      <Navbar.CollapseItem>
        <Link
          color="inherit"
          style={{
            minWidth: '100%',
            color: 'white',
          }}
          href="/categories"
        >
          Categorias
        </Link>
      </Navbar.CollapseItem>
      <Navbar.CollapseItem>
        <Link
          color="inherit"
          style={{
            minWidth: '100%',
            color: 'white',
          }}
          href="/about"
        >
          Sobre
        </Link>
      </Navbar.CollapseItem>
    </Navbar.Collapse>
  </Navbar>
);
