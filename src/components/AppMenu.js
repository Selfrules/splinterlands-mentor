import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function AppMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <div>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {/* Aggiungi questo MenuItem per la voce Home */}
          <MenuItem onClick={handleClose} component={RouterLink} to="/">
            Home
          </MenuItem>
          <MenuItem onClick={handleClose} component={RouterLink} to="/admin">
            DB-Rules
          </MenuItem>
          <MenuItem onClick={handleClose} component={RouterLink} to="/rules">
            Regole
          </MenuItem>
        </Menu>
      </div>
    );
  }

export default AppMenu;
