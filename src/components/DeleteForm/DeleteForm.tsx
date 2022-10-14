import React, { FC } from 'react';
import Button from '../Button';
import Form from '../Form';
import { FormTitle } from '../Form/Form';
type DeleteFormProps = {
  deleteItem: () => void;
  setConfirmActive: (active: boolean) => void;
};

const DeleteForm: FC<DeleteFormProps> = ({ setConfirmActive, deleteItem }) => {
  return (
    <Form>
      <FormTitle title="Are you sure ?" />
      <Button type="button" onClick={deleteItem} className="mb-16">
        Yes
      </Button>
      <div style={{ display: 'flex' }}>
        <Button
          variant="transparent"
          type="button"
          className="controll-panel__add"
          style={{ margin: '0 auto' }}
          onClick={() => setConfirmActive(false)}
        >
          No
        </Button>
      </div>
    </Form>
  );
};

export default DeleteForm;
