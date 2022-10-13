import React, { useEffect, useState } from 'react';
import Button from '../Button';
import Form from '../Form';
import { FormTitle } from '../Form/Form';
import Input from '../Input';
import './AddCustomerForm.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/typedDispatch';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { addCustomer, editCustomer } from '../../store/slices/customersSlice';
import FileInput from '../FileInput';
import PreviewImage from '../PreviewImage/PreviewImage';
import { randomId } from '../../utils/randomId';

type AddCustomerFormProps = {
  id: number | null;
  onClose: () => void;
};

const AddCustomerForm = ({ id, onClose }: AddCustomerFormProps) => {
  const [imgUrl, setImgUrl] = useState('');

  const dispatch = useAppDispatch();
  const customers = useAppSelector((state) => state.customers.customers);
  const customer = customers.filter((item) => item.id === id)[0] || {
    first_name: '',
    last_name: '',
    email: '',
    address: '',
    image: '',
  };

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(),
  });

  useEffect(() => {
    setImgUrl(customer.image);
    reset(customer);
  }, [id]);

  const previewImage = (file: File) => {
    setImgUrl(URL.createObjectURL(file));
  };

  const onSubmit = (data: FieldValues) => {
    const item = {
      ...data,
      id: id ? id : randomId(),
    };
    dispatch(id ? editCustomer(item) : addCustomer(item));
    setImgUrl('');
    onClose();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormTitle title={id ? 'Edit customer' : 'Add customer'} />
      <FileInput
        {...register('image', { onChange: (e) => previewImage(e.target.files[0]) })}
        error={errors?.image?.message as string}
      />
      <PreviewImage imgUrl={imgUrl} />
      <Input
        id="first_name"
        label="First name"
        placeholder="First name"
        type="text"
        {...register('first_name')}
        error={errors?.first_name?.message as string}
      />
      <Input
        id="last_name"
        label="Last Name"
        placeholder="Last name"
        type="text"
        {...register('last_name')}
        error={errors?.last_name?.message as string}
      />
      <Input
        id="email"
        label="Email"
        placeholder="Email"
        type="email"
        {...register('email')}
        error={errors?.email?.message as string}
      />
      <Input
        id="address"
        label="address"
        placeholder="Customer address"
        type="text"
        {...register('address')}
        error={errors?.address?.message as string}
      />
      <Button className="mb-16" type="submit">
        Save
      </Button>
      <div style={{ display: 'flex' }}>
        <Button variant="transparent" style={{ margin: '0 auto' }} type="button" onClick={onClose}>
          Cancel
        </Button>
      </div>
    </Form>
  );
};

export default AddCustomerForm;
