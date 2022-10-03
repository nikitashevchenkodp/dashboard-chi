import Select from '../Select';
import React, { useEffect, useState } from 'react';
import { TickerItem } from '../../utils/consts';
import { FormTitle } from '../Form/Form';
import Form from '../Form/Form';
import Input from '../Input';
import './AddTickerForm.scss';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextField } from '@mui/material';
import { useFormik } from 'formik';
import dayjs, { Dayjs } from 'dayjs';
import * as Yup from 'yup';
import Button from '../Button';

type AddTickerFormProps = {
  updateFunction: (item: any) => void;
  id: number | null;
  setActive: (active: boolean) => void;
  getItem: (id: number) => Promise<TickerItem>;
};

type InitialState = {
  details_text: string;
  name: string;
  date: Dayjs | string;
  status: string;
  image?: any;
};

const randomId = () => {
  return Math.floor(Math.random() * 1000 + 33);
};

const AddTickerForm = ({ updateFunction, id, setActive, getItem }: AddTickerFormProps) => {
  const [initialForm, setInitialForm] = useState<InitialState>({
    details_text: '',
    name: '',
    date: dayjs(),
    status: '',
    image: '',
  });

  useEffect(() => {
    if (id) {
      getItem(id).then((res) => {
        setInitialForm({
          ...res,
          date: dayjs(res.date),
        });
      });
    } else {
      setInitialForm({
        details_text: '',
        name: '',
        date: dayjs(),
        status: '',
        image: '',
      });
    }
  }, [id]);

  const schema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    details_text: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  });

  const formik = useFormik({
    initialValues: initialForm,
    enableReinitialize: true,
    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {
      updateFunction({
        ...values,
        id: id ? id : randomId(),
      });
      setActive(false);
      resetForm();
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <FormTitle title={id ? 'Edit ticker' : 'Add ticker'} />
      <Input
        id="details"
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
