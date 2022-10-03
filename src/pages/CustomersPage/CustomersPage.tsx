import React, { useEffect, useMemo, useRef, useState } from 'react';
import './CustomersPage.scss';

import {
  customersCellTitles,
  getCustomerData,
  paginationIndexes,
  filterCustomerFunction,
  sortFunctionCustomer,
} from '../../utils';
import { ControlPanel, ModalWindow, AddCustomerForm } from '../../components';
import { CustomerItem } from '../../utils/consts';

import DeleteForm from '../../components/DeleteForm';

import MainTable from '../../components/MainTable';
import CustomerTableRow from '../../components/CustomerTableRow';

const CustomersPage = () => {
  const [customers, setCustomers] = useState<CustomerItem[]>([]);
  const [active, setActive] = useState<boolean>(false);
  const [confirmActive, setConfirmActive] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<number | null>(null);
  const [sort, setSort] = useState('');
  const [filter, setFilter] = useState('');
  const deleteId = useRef<any>();

  const updateItem = (customer: CustomerItem) => {
    const idx = customers!.findIndex((item) => item.id === customer.id);
    if (idx < 0) {
      setCustomers([...customers, customer]);
    } else if (idx >= 0) {
      setCustomers([...customers.slice(0, idx), customer, ...customers.slice(idx + 1)]);
    }
  };

  const setDeleteItem = (id: number) => {
    setConfirmActive(true);
    deleteId.current = id;
  };

  const deleteItem = () => {
    setCustomers(customers.filter((item) => item.id !== deleteId.current));
  };

  function getCustomerItem(id: number) {
    const item = customers?.filter((item) => item.id === id)[0]!;
    return new Promise<CustomerItem>((resolve) => {
      resolve(item);
    });
  }

  useEffect(() => {
    getCustomerData().then((res) => setCustomers(res));
  }, []);

  const sortedItems = useMemo(() => sortFunctionCustomer(customers, sort), [sort, customers]);
  const filteredItems = useMemo(() => filterCustomerFunction(sortedItems, filter), [filter, sortedItems]);

  return (
    <>
      <div className="container">
        <div className="white-container">
          <ControlPanel
            setSort={setSort}
            setCurrentId={setCurrentId}
            setActive={setActive}
            sortCriterias={['name', 'date']}
            setFilter={setFilter}
            filter={filter}
          />
          <MainTable
            data={filteredItems}
            Component={CustomerTableRow}
            headerTitles={customersCellTitles}
            setDeleteItem={setDeleteItem}
            setCurrentId={setCurrentId}
            setActive={setActive}
          />
        </div>
      </div>
      <ModalWindow active={active} setActive={setActive}>
        <AddCustomerForm
          updateFunction={updateItem}
          id={currentId}
          setActive={setActive}
          getCustomerItem={getCustomerItem}
        />
      </ModalWindow>
      <ModalWindow active={confirmActive} setActive={setConfirmActive}>
        <DeleteForm setConfirmActive={setConfirmActive} deleteItem={deleteItem} />
      </ModalWindow>
    </>
  );
};

export default CustomersPage;
