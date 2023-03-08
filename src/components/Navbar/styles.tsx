import { styled, Navbar } from '@nextui-org/react';

export const ToggleButton = styled(Navbar.Toggle, {
  display: 'none',

  '@media (max-width: 650px)': {
    display: 'block',
  },
});
