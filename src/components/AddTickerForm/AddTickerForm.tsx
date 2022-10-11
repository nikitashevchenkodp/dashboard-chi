import Select from '../Select';
import React, { useEffect, useState } from 'react';
import { FormTitle } from '../Form/Form';
import Form from '../Form/Form';
import Input from '../Input';
import './AddTickerForm.scss';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import dayjs, { Dayjs } from 'dayjs';
import Button from '../Button';
import { useAppDispatch } from '../../hooks/typedDispatch';
import DashboardApiService from '../../services/DashboardApiService';
import { sagaActions } from '../../store/saga/saga-actions';

type AddTickerFormProps = {
  id: number | null;
  setActive: (active: boolean) => void;
};

type InitialState = {
  details_text: string;
  name: string;
  date: string;
  status: string;
  image?: any;
};

const randomId = () => {
  return Math.floor(Math.random() * 1000 + 33);
};

const AddTickerForm = ({ id, setActive }: AddTickerFormProps) => {
  const dashboardApi = new DashboardApiService();

  const dispatch = useAppDispatch();

  const [initialForm, setInitialForm] = useState<InitialState>({
    details_text: '',
    name: '',
    date: dayjs().toString(),
    status: '',
    image: '',
  });

  useEffect(() => {
    if (id) {
      dashboardApi.getTicker(id).then((res) => {
        setInitialForm({
          ...res,
          date: dayjs(res.date),
        });
      });
    } else {
      setInitialForm({
        details_text: '',
        name: '',
        date: dayjs().toString(),
        status: '',
        image: '',
      });
    }
  }, [id]);

  const formik = useFormik({
    initialValues: initialForm,
    enableReinitialize: true,
    onSubmit: (values, { resetForm }) => {
      if (id) {
        dispatch({
          type: sagaActions.EDIT_TICKET_SAGA,
          payload: {
            ...values,
            id,
            date: dayjs(values.date).toString(),
          },
        });
      } else {
        dispatch({
          type: sagaActions.ADD_TICKET_SAGA,
          payload: {
            ...values,
            id: id ? id : randomId(),
            date: dayjs(values.date).toString(),
          },
        });
      }

      setActive(false);
      resetForm();
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <FormTitle title={id ? 'Edit ticker' : 'Add ticker'} />
      <Input
        id="details_text"
        name="details_text"
        label="Ticket details"
        placeholder="Add description"
        type="text"
        value={formik.values.details_text}
        onChange={formik.handleChange}
      />
      <Input
        id="name"
        name="name"
        label="Customer name"
        placeholder="Name"
        type="text"
        value={formik.values.name}
        onChange={formik.handleChange}
      />
      <div className="datepicker__wrapper">
        <p className="datepicker__label">PICK THE DATE</p>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            className="datepicker"
            inputFormat="MM/DD/YYYY"
            value={formik.values.date}
            onChange={(val) => formik.setFieldValue('date', val)}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </div>

      <Select
        id="status"
        name="status"
        placeholder="Choose value"
        options={['high', 'normal', 'low']}
        value={formik.values.status}
        onChange={formik.handleChange}
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
