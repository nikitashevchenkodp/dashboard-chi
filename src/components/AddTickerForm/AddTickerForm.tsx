import Select from '../Select';
import React, { FC, useEffect, useState } from 'react';
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
import { Controller, useForm } from 'react-hook-form';
import { addTicket, editTicket } from '../../store/slices/ticketsSlice';
import { yupResolver } from '@hookform/resolvers/yup';
import PreviewImage from '../PreviewImage/PreviewImage';
import { addTicketSchema } from '../../utils/validationSchemas/addticketSchema';
import { randomId } from '../../utils/randomId';
import { BsCalendar2Date } from 'react-icons/bs';
import { ticketById } from '../../store/selectors';
import { TickerItem } from '../../utils/consts';

type AddTickerFormProps = {
  id: number | null;
  onClose: () => void;
};

const AddTickerForm: FC<AddTickerFormProps> = ({ id, onClose }) => {
  const ticket = useAppSelector((state) => ticketById(state, id)) || {
    details_text: '',
    name: '',
    date: dayjs(),
    status: '',
    image: '',
  };

  const [imgUrl, setImgUrl] = useState(ticket.image);

  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: ticket,
    resolver: yupResolver(addTicketSchema),
  });

  const previewImage = (file: File) => {
    setImgUrl(URL.createObjectURL(file));
  };

  const onSubmit = (data: TickerItem) => {
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
        error={errors?.image?.message}
      />
      <PreviewImage imgUrl={imgUrl} />
      <Input
        id="details"
        label="Ticket details"
        placeholder="Add description"
        type="text"
        error={errors?.details_text?.message}
        {...register('details_text')}
      />
      <Input
        id="name"
        label="Customer name"
        placeholder="Name"
        type="text"
        {...register('name')}
        error={errors?.name?.message}
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
            </div>
          </>
        )}
      />

      <Select
        id="status"
        placeholder="Choose value"
        options={['high', 'normal', 'low']}
        {...register('status')}
        error={errors?.status?.message}
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
