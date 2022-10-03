import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTicket } from '../../store/action-creators/tickets';
import { CustomerItem, TickerItem } from '../../utils/consts';
import Button from '../Button';
import Form from '../Form';
import { FormTitle } from '../Form/Form';
type DeleteFormProps = {
  deleteItem: () => void;
  setConfirmActive: (confirmActive: boolean) => void;
};

const DeleteForm = ({ setConfirmActive, deleteItem }: DeleteFormProps) => {
  const dispatch = useDispatch();
  return (
    <Form>
      <FormTitle title="Are you sure ?" />
      <Button
        type="button"
        onClick={() => {
          deleteItem();
          setConfirmActive(false);
        }}
      >
        Yes
      </Button>
      <Button
        variant="transparent"
        type="button"
        className="controll-panel__add"
        onClick={() => setConfirmActive(false)}
      >
        No
      </Button>
    </Form>
  );
};

export default DeleteForm;
