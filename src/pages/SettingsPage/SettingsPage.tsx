import React, { useState } from 'react';
import './SettingsPage.scss';
import { user1 } from '../../asset';
import { Button, Input } from '../../components';
import { useForm } from '../../hooks/useForm';
import { useAppDispatch, useAppSelector } from '../../hooks/typedDispatch';
import { editUser } from '../../store/slices/userSlice';

const SettingsPage = () => {
  const { user } = useAppSelector(({ user }) => user);
  const dispatch = useAppDispatch();

  const [form, handleChange] = useForm(user);

  const handleClick = () => {
    dispatch(editUser(form!));
  };

  return (
    <div className="container">
      <div className="setting-page__inner">
        <div className="card w30perc">
          <div className="card__header">Your Profile</div>
          <div className="card__body align-items-center">
            <div className="card__avatar">
              <img src={user1} alt="" />
            </div>
            <div className="card__text-m">
              {user?.firstName} {user?.lastName}
            </div>
            <div className="card__text-s">{user?.email}</div>
            <div className="card__text-s">{user?.address}</div>
          </div>
        </div>
        <div className="card w100perc">
          <div className="card__header">Profile Settings</div>
          <div className="card__body">
            <Input
              id="firstName"
              name="firstName"
              type="text"
              label="First name"
              value={form?.firstName}
              onChange={handleChange}
            />
            <Input
              id="lastName"
              name="lastName"
              type="text"
              label="Last name"
              value={form?.lastName}
              onChange={handleChange}
            />
            <Input id="email" name="email" type="email" label="Email" value={form?.email} onChange={handleChange} />
            <Input
              id="address"
              name="address"
              type="text"
              label="Adress"
              value={form?.address}
              onChange={handleChange}
            />
            <Button onClick={handleClick}>Save changes</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
