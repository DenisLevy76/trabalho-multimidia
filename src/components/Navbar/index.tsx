import { Navbar, Text } from '@nextui-org/react';
import Image from 'next/image';

export const NavbarComponent = () => (
  <Navbar isBordered variant={'floating'}>
    <Navbar.Content hideIn="xs" variant="underline-rounded">
      <Navbar.Link isActive href="/">
        Inicio
      </Navbar.Link>
      <Navbar.Link href="/articles">Artigos</Navbar.Link>
      <Navbar.Link href="/categories">Categorias</Navbar.Link>
      <Navbar.Link href="/about">Sobre</Navbar.Link>
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
  </Navbar>
);
