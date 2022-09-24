import React, { useEffect, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { TickerItem } from '../../utils/consts';
import Button from '../Button';
import Form from '../Form';
import { FormTitle } from '../Form/Form';
import Input from '../Input';
import './AddTickerForm.scss';

type AddTickerFormProps = {
  updateFunction: (item: any) => void;
  id: number | null;
  setActive: (active: boolean) => void;
  getItem: (id: number) => Promise<TickerItem>;
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

const AddTickerForm = ({ updateFunction, id, setActive, getItem }: AddTickerFormProps) => {
  const [initialForm, setInitialForm] = useState<InitialState>({
    details_text: '',
    name: '',
    date: '',
    status: '',
    image: '',
  });

  useEffect(() => {
    if (id) {
      getItem(id).then((res) => {
        setInitialForm(res);
      });
    } else {
      setInitialForm({
        details_text: '',
        name: '',
        date: '',
        status: '',
        image: '',
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
      <FormTitle title={id ? 'Edit ticker' : 'Add ticker'} />
      <Input
        id="details"
        name="details_text"
        label="Ticket details"
        placeholder="Add description"
        type="text"
        value={form.details_text}
        onChange={changeHandler}
      />
      <Input
        id="name"
        name="name"
        label="Customer name"
        placeholder="Name"
        type="text"
        value={form.name}
        onChange={changeHandler}
      />
      <Input
        id="date"
        name="date"
        label="Pick the date"
        placeholder="Date"
        type="date"
        value={form.date}
        onChange={changeHandler}
      />
      {/* <Input
        id="status"
        name="status"
        label="priority"
        placeholder="Choose priority"
        type="select"
        value={form.status}
        onChange={changeHandler}
      /> */}
      <select style={{ width: '100%' }} name="status" onChange={changeHandler} value={form.status}>
        <option value="" disabled>
          choose value
        </option>
        <option value="high">high</option>
        <option value="low">low</option>
        <option value="normal">normal</option>
      </select>

      <Button type="submit">Save</Button>
      <div style={{ display: 'flex' }}>
        <button
          type="button"
          style={{ margin: '0 auto' }}
          className="controll-panel__add"
          onClick={() => setActive(false)}
        >
          Cancel
        </button>
      </div>
    </Form>
  );
};

export default AddTickerForm;
