import Select from '../Select';
import React, { useEffect, useState } from 'react';
import { FormTitle } from '../Form/Form';
import Form from '../Form/Form';
import Input from '../Input';
import './AddTickerForm.scss';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import Button from '../Button';
import { useAppDispatch, useAppSelector } from '../../hooks/typedDispatch';
import { sagaActions } from '../../store/saga/saga-actions';
import FileInput from '../FileInput';
import { Controller, useForm } from 'react-hook-form';

type AddTickerFormProps = {
  id: number | null;
  setActive: (active: boolean) => void;
};

const randomId = () => {
  return Math.floor(Math.random() * 1000 + 33);
};

const AddTickerForm = ({ id, setActive }: AddTickerFormProps) => {
  const [imgUrl, setImgUrl] = useState<any>('');

  const tickets = useAppSelector((state) => state.tickets.tickets);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      const ticket = tickets.filter((item) => item.id === id)[0];
      reset({
        ...ticket,
        image: '',
        date: dayjs(ticket.date),
      });
    } else {
      reset({
        details_text: '',
        name: '',
        date: dayjs(),
        status: '',
        image: '',
      });
    }
  }, [id]);

  const { control, handleSubmit, reset } = useForm({});

  const submit = (data: any) => {
    if (id) {
      dispatch({
        type: sagaActions.EDIT_TICKET_SAGA,
        payload: {
          ...data,
          id,
          date: dayjs(data.date).toString(),
        },
      });
    } else {
      dispatch({
        type: sagaActions.ADD_TICKET_SAGA,
        payload: {
          ...data,
          id: randomId(),
          date: dayjs(data.date).toString(),
        },
      });
    }
    setImgUrl('');
    setActive(false);
  };

  const previewImage = (file: any) => {
    setImgUrl(URL.createObjectURL(file));
  };

  return (
    <Form onSubmit={handleSubmit(submit)}>
      <FormTitle title={id ? 'Edit ticker' : 'Add ticker'} />
      <Controller
        name="image"
        control={control}
        defaultValue=""
        render={({ field: { onChange, ...otherfields } }) => (
          <FileInput
            onChange={(e) => {
              previewImage(e?.target?.files?.[0]);
              onChange(e);
            }}
            {...otherfields}
          />
        )}
      />
      {imgUrl && (
        <div className="preview__img__container">
          <img className="preview__img" src={imgUrl} alt="sdfsdf" />
        </div>
      )}
      <Controller
        name="details_text"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Input id="details" label="Ticket details" placeholder="Add description" type="text" {...field} />
        )}
      />
      <Controller
        name="name"
        control={control}
        defaultValue=""
        render={({ field }) => <Input id="name" label="Customer name" placeholder="Name" type="text" {...field} />}
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
          <Select id="status" placeholder="Choose value" options={['high', 'normal', 'low']} {...field} />
        )}
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

export default AddTickerForm;
