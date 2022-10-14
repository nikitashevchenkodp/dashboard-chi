import { Menu, MenuItem } from '@mui/material';
import React, { FC, useState } from 'react';
import Button from '../Button';
import './Sort.scss';
import sort from '../../asset/sort.svg';

type SortProps = {
  setSort: (sort: string) => void;
  sortCriterias: string[];
};

const Sort: FC<SortProps> = ({ setSort, sortCriterias }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeSort = (sort: string) => {
    setSort(sort);
    setAnchorEl(null);
  };

  return (
    <>
      <Button variant="empty" onClick={handleClick}>
        <img className="controll-panel__icon" src={sort} alt="" />
        <p className="controll-panel_text">Sort</p>
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
        {sortCriterias.map((criteria) => (
          <MenuItem key={criteria} onClick={() => changeSort(`${criteria}`)}>
            {criteria.slice(0, 1).toUpperCase() + criteria.slice(1)}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default Sort;
