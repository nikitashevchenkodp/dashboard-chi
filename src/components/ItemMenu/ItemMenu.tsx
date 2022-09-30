import { Menu, MenuItem } from '@mui/material';
import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Button from '../Button';

type ItemMenuProps = {
  setActive: (active: boolean) => void;
  setCurrentId: () => void;
  deleteItem: () => void;
};

const ItemMenu = ({ setActive, setCurrentId, deleteItem }: ItemMenuProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button variant="empty" onClick={handleClick}>
        <BsThreeDotsVertical color="#C5C7CD" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem
          onClick={() => {
            setActive(true);
            setCurrentId();
            setAnchorEl(null);
          }}
        >
          Edit
        </MenuItem>
        <MenuItem
          onClick={() => {
            deleteItem();
            setAnchorEl(null);
          }}
        >
          Delete
        </MenuItem>
      </Menu>
    </>
  );
};

export default ItemMenu;
