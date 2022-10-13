import React from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/typedDispatch';
import user_photo from '../../asset/avatar_header.png';
import './User.scss';
import { Menu, MenuItem } from '@mui/material';
import { cleanUser } from '../../store/slices/userSlice';

const User = () => {
  const { user } = useAppSelector(({ user }) => user);
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <div className="user">
        <p className="user__name">
          {user?.firstName} {user?.lastName}
        </p>
        <div className="user__avatar" onClick={handleClick}>
          <img src={user_photo} alt="user avatar" />
        </div>
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => dispatch(cleanUser())}>Log Out</MenuItem>
      </Menu>
    </>
  );
};

export default User;
