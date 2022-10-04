import React, { useEffect, useRef, useState } from 'react';
import './CustomersTable.scss';

import { customersCellTitles, getCustomerData, filterCustomerFunction, sortFunctionCustomer } from '../../utils';
import { ModalWindow, AddCustomerForm } from '../../components';
import { CustomerItem } from '../../utils/consts';

import DeleteForm from '../../components/DeleteForm';

import MainTable from '../../components/MainTable';
import CustomerTableRow from '../../components/CustomerTableRow';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducers';
import {
  deleteCustomer,
  fetchAllCustomers,
  loadAllCustomers,
  rejectAllCustomers,
} from '../../store/action-creators/customers';
import { useDispatch } from 'react-redux';

const CustomersTable = () => {
  const [active, setActive] = useState<boolean>(false);
  const [confirmActive, setConfirmActive] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<number | null>(null);
  const deleteId = useRef<any>();

  const { customers, loading } = useSelector((state: RootState) => state.customers);
  const dispatch = useDispatch();

  const setDeleteItem = (id: number) => {
    setConfirmActive(true);
    deleteId.current = id;
  };

  const deleteItem = () => {
    dispatch(deleteCustomer(deleteId.current));
    setConfirmActive(false);
  };

  const onEdit = (id: number | null) => {
    setActive(true);
    setCurrentId(id);
  };

  useEffect(() => {
    dispatch(fetchAllCustomers());
    getCustomerData()
      .then((res) => {
        console.log('get result');
        dispatch(loadAllCustomers(res));
      })
      .catch((e) => dispatch(rejectAllCustomers(e.message)));
  }, [dispatch]);

  const renderItem = (item: CustomerItem) => {
    return (
      <CustomerTableRow
        key={item.id}
        rowData={item}
        onEdit={() => onEdit(item.id)}
        setDeleteItem={() => setDeleteItem(item.id)}
      />
    );
  };

  return (
    <>
      <MainTable
        data={customers}
        loading={loading}
        sortCriterias={['name', 'date']}
        sortFunction={sortFunctionCustomer}
        filterFunction={filterCustomerFunction}
        renderItem={renderItem}
        headerTitles={customersCellTitles}
        onEdit={onEdit}
      />

      <ModalWindow active={active} setActive={setActive}>
        <AddCustomerForm id={currentId} setActive={setActive} />
      </ModalWindow>
      <ModalWindow active={confirmActive} setActive={setConfirmActive}>
        <DeleteForm setConfirmActive={setConfirmActive} deleteItem={deleteItem} />
      </ModalWindow>
    </>
  );
};

export default CustomersTable;