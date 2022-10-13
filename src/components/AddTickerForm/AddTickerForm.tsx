import Select from '../Select';
import React, { useEffect, useState } from 'react';
import { FormTitle } from '../Form/Form';
import Form from '../Form/Form';
import Input from '../Input';
import './AddTickerForm.scss';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField } from '@mui/material';
import dayjs from 'dayjs';
import Button from '../Button';
import { useAppDispatch, useAppSelector } from '../../hooks/typedDispatch';
import FileInput from '../FileInput';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import { addTicket, editTicket } from '../../store/slices/ticketsSlice';
import { yupResolver } from '@hookform/resolvers/yup';
import PreviewImage from '../PreviewImage/PreviewImage';
import { addTicketSchema } from '../../utils/validationSchemas/addticketSchema';
import { randomId } from '../../utils/randomId';
import { BsCalendar2Date } from 'react-icons/bs';

type AddTickerFormProps = {
  id: number | null;
  onClose: () => void;
};

const AddTickerForm = ({ id, onClose }: AddTickerFormProps) => {
  const [imgUrl, setImgUrl] = useState('');
  const tickets = useAppSelector((state) => state.tickets.tickets);
  const ticket = tickets.filter((item) => item.id === id)[0] || {
    details_text: '',
    name: '',
    date: dayjs(),
    status: '',
    image: '',
  };
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addTicketSchema),
  });

  useEffect(() => {
    setImgUrl(ticket.image);
    reset(ticket);
  }, [id]);

  const previewImage = (file: File) => {
    setImgUrl(URL.createObjectURL(file));
  };

  const onSubmit = (data: FieldValues) => {
    console.log(data);

    const item = {
      ...data,
      id: id ? id : randomId(),
      date: dayjs(data.date).toString(),
    };
    dispatch(id ? editTicket(item) : addTicket(item));
    setImgUrl('');
    onClose();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormTitle title={id ? 'Edit ticker' : 'Add ticker'} />
      <FileInput
        {...register('image', { onChange: (e) => previewImage(e.target.files[0]) })}
        error={errors?.image?.message as string}
      />
      <PreviewImage imgUrl={imgUrl} />
      <Input
        id="details"
        label="Ticket details"
        placeholder="Add description"
        type="text"
        error={errors?.details_text?.message as string}
        {...register('details_text')}
      />

      <Controller
        name="name"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Input
            id="name"
            label="Customer name"
            placeholder="Name"
            type="text"
            {...field}
            error={errors?.name?.message as string}
          />
        )}
      />
      <Controller
        name="date"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <>
            <div className="datepicker__wrapper">
              <p className="datepicker__label">PICK THE DATE</p>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  className="datepicker"
                  inputFormat="MM/DD/YYYY"
                  components={{
                    OpenPickerIcon: BsCalendar2Date,
                  }}
                  InputProps={{
                    sx: {
                      height: '42px',
                      border: ' 1px solid #f0f1f7;',
                    },
                  }}
                  renderInput={(params) => <TextField {...params} />}
                  {...field}
                />
              </LocalizationProvider>
            </div>{' '}
          </>
        )}
      />
      <Controller
        name="status"
        defaultValue=""
        control={control}
        render={({ field }) => (
          <Select
            id="status"
            placeholder="Choose value"
            options={['high', 'normal', 'low']}
            {...field}
            error={errors?.status?.message as string}
          />
        )}
      />

      <Button className="mb-16" type="submit">
        Save
      </Button>
      <div style={{ display: 'flex' }}>
        <Button
          variant="transparent"
          style={{ margin: '0 auto' }}
          type="button"
          onClick={() => {
            onClose();
          }}
        >
          Cancel
        </Button>
      </div>
    </Form>
  );
};

export default AddTickerForm;
