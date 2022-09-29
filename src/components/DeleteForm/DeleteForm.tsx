import React from 'react';
import { TickerItem } from '../../utils/consts';
import Button from '../Button';
import Form from '../Form';
import { FormTitle } from '../Form/Form';
type DeleteFormProps = {
  setTickers: (tickers: TickerItem[]) => void;
  setConfirmActive: (confirmActive: boolean) => void;
  tickers: TickerItem[];
  deleteId: React.MutableRefObject<any>;
};

const DeleteForm = ({ setTickers, setConfirmActive, tickers, deleteId }: DeleteFormProps) => {
  return (
    <Form>
      <FormTitle title="Are you sure ?" />
      <Button
        type="button"
        onClick={() => {
          setTickers(tickers.filter((item) => item.id !== deleteId.current));
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
