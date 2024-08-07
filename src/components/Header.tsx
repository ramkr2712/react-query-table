import React, { useState } from 'react';
import { IconButton, Menu, MenuItem, TextField, Tooltip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const Header = ({ onSearch }: { onSearch: (text: string) => void }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [searchText, setSearchText] = useState<string>('');
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    onSearch(event.target.value); // Passing search text to parent
  };

  return (
    <div style={{ padding: 10, backgroundColor: '#333', color: '#fff', display: 'flex', alignItems: 'center' }}>
      <h2 style={{ flexGrow: 1 }}>Product Table</h2>
      <Tooltip title="Filter">
        <IconButton
          onClick={handleClick}
          style={{ color: '#fff' }}
        >
          <SearchIcon />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            backgroundColor: '#f5f5f5',
            color: '#000',
            borderRadius: 5,
          },
        }}
      >
        <MenuItem>
          <TextField
            value={searchText}
            onChange={handleFilterChange}
            placeholder="Search"
            fullWidth
          />
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Header;
