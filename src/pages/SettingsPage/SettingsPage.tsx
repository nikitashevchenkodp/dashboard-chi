import React, { useState } from 'react';
import './SettingsPage.scss';
import { user1 } from '../../asset';
import { Button, Input } from '../../components';
import { useForm } from '../../hooks/useForm';

const SettingsPage = () => {
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [email, setEmail] = useState('');
  // const [address, setAddress] = useState('');
  const [form, handleChange] = useForm({
    firstName: 'Nikita',
    lastName: 'Shevchenko',
    email: 'sdfgsfgf@gmail.com',
    address: 'Dnipro Lipova st. b.234 f. 345345',
  });
  const [data, setData] = useState({
    firstName: 'Nikita',
    lastName: 'Shevchenko',
    email: 'sdfgsfgf@gmail.com',
    address: 'Dnipro Lipova st. b.234 f. 345345',
  });

  const handleClick = () => {
    setData(form);
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
              {data.firstName} {data.lastName}
            </div>
            <div className="card__text-s">{data.email}</div>
            <div className="card__text-s">{data.address}</div>
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
              value={form.firstName}
              onChange={handleChange}
            />
            <Input
              id="lastName"
              name="lastName"
              type="text"
              label="Last name"
              value={form.lastName}
              onChange={handleChange}
            />
            <Input id="email" name="email" type="email" label="Email" value={form.email} onChange={handleChange} />
            <Input
              id="address"
              name="address"
              type="text"
              label="Adress"
              value={form.address}
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
