import React from 'react';
import Button from '../Button';
import Form from '../Form';
import { FormTitle } from '../Form/Form';
type DeleteFormProps = {
  deleteItem: () => void;
  setConfirmActive: (active: boolean) => void;
};

const DeleteForm = ({ setConfirmActive, deleteItem }: DeleteFormProps) => {
  return (
    <Form>
      <FormTitle title="Are you sure ?" />
      <Button type="button" onClick={deleteItem}>
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
