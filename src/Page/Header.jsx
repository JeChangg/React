import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

function Navbar() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      <ButtonGroup variant="text" aria-label="text button group">
        <Button color="inherit">Home</Button>
        <Button color="inherit">Product</Button>
        <Button color="inherit">Contact</Button>
        <Button color="inherit">About Us</Button>
      </ButtonGroup>
    </Box>
  );
}

export default Navbar;
