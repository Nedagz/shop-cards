import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
// import { styled } from '@mui/material/styles';

export default function BadgeComponent() {
  return (
    <IconButton aria-label="cart">
      <Badge badgeContent={4} color="secondary">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
}
