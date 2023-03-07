import { Navbar, Text } from '@nextui-org/react';

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
      <Text b color="inherit" hideIn="xs">
        UNAMA
      </Text>
    </Navbar.Brand>
  </Navbar>
);
