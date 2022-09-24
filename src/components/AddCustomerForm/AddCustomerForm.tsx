import React, { useEffect, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { CustomerItem } from '../../utils/consts';
import Button from '../Button';
import Form from '../Form';
import { FormTitle } from '../Form/Form';
import Input from '../Input';
import './AddCustomerForm.scss';

type AddCustomerFormProps = {
  updateFunction: (item: any) => void;
  id: number | null;
  setActive: (active: boolean) => void;
  getCustomerItem: (id: number) => Promise<CustomerItem>;
};

type InitialState = {
  first_name: string;
  last_name: string;
  email: string;
  address: string;
};

const randomId = () => {
  return Math.floor(Math.random() * 1000 + 33);
};

const AddCustomerForm = ({ updateFunction, id, setActive, getCustomerItem }: AddCustomerFormProps) => {
  const [initialForm, setInitialForm] = useState<InitialState>({
    first_name: '',
    last_name: '',
    email: '',
    address: '',
  });

  useEffect(() => {
    if (id) {
      getCustomerItem(id).then((res) => {
        setInitialForm(res);
      });
    } else {
      setInitialForm({
        first_name: '',
        last_name: '',
        email: '',
        address: '',
      });
    }
  }, [id]);

  const [form, changeHandler] = useForm(initialForm);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTicker = {
      ...form,
      id: id ? id : randomId(),
      date: new Date().toLocaleString(),
    };
    updateFunction(newTicker);
    setActive(false);
  };

  return (
    <Form onSubmit={submit}>
      <FormTitle title={id ? 'Edit customer' : 'Add customer'} />
      <Input
        id="first_name"
        name="first_name"
        label="First name"
        placeholder="First name"
        type="text"
        value={form.first_name}
        onChange={changeHandler}
      />
      <Input
        id="last_name"
        name="last_name"
        label="Last Name"
        placeholder="Last name"
        type="text"
        value={form.last_name}
        onChange={changeHandler}
      />
      <Input
        id="email"
        name="email"
        label="Email"
        placeholder="Email"
        type="email"
        value={form.email}
        onChange={changeHandler}
      />
      <Input
        id="address"
        name="address"
        label="address"
        placeholder="Customer address"
        type="text"
        value={form.address}
        onChange={changeHandler}
      />
      <Button type="submit">Save</Button>
      <div style={{ display: 'flex' }}>
        <button style={{ margin: '0 auto' }} className="controll-panel__add" onClick={() => setActive(false)}>
          Cancel
        </button>
      </div>
    </Form>
  );
};

export default AddCustomerForm;
