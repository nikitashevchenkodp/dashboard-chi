import React, { useEffect, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { CustomerItem, getCustomer } from '../../utils/consts';
import Button from '../Button';
import Form from '../Form';
import { FormTitle } from '../Form/Form';
import Input from '../Input';
import './AddCustomerForm.scss';
import { useAppSelector, useAppDispatch } from '../../hooks/typedDispatch';
import { updateCustomer } from '../../store/slices/customersSlice';
import { customersSelector } from '../../store/selectors';
type AddCustomerFormProps = {
  id: number | null;
  setActive: (active: boolean) => void;
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

const AddCustomerForm = ({ id, setActive }: AddCustomerFormProps) => {
  const [initialForm, setInitialForm] = useState<InitialState>({
    first_name: '',
    last_name: '',
    email: '',
    address: '',
  });

  const { customers } = useAppSelector(customersSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      getCustomer(customers, id).then((res) => {
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
      date: new Date().toUTCString(),
    };
    console.log(newTicker);

    dispatch(updateCustomer(newTicker));
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
      <Button className="mb-16" type="submit">
        Save
      </Button>
      <div style={{ display: 'flex' }}>
        <Button variant="transparent" style={{ margin: '0 auto' }} type="button" onClick={() => setActive(false)}>
          Cancel
        </Button>
      </div>
    </Form>
  );
};

export default AddCustomerForm;
