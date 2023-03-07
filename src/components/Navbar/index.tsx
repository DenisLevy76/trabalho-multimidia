import { Navbar, Text } from '@nextui-org/react';

export const NavbarComponent = () => (
  <Navbar isBordered variant={'floating'}>
    <Navbar.Content hideIn="xs">
      <Navbar.Link href="#">Features</Navbar.Link>
      <Navbar.Link isActive href="#">
        Customers
      </Navbar.Link>
      <Navbar.Link href="#">Pricing</Navbar.Link>
      <Navbar.Link href="#">Company</Navbar.Link>
    </Navbar.Content>
    <Navbar.Brand>
      <Text b color="inherit" hideIn="xs">
        UNAMA
      </Text>
    </Navbar.Brand>
  </Navbar>
);
