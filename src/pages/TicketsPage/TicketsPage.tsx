import React from 'react';
import Header from '../../components/Header';
import './TicketsPage.scss';
import filter from '../../asset/filter.svg';
import sort from '../../asset/sort.svg';

const TicketPage = () => {
  return (
    <div>
      <Header title="Tickets" />
      <div className="container">
        <div className="white-container">
          {/* controll panel start */}
          <div className="controll-panel">
            <div className="controll-panel__item">
              <img className="controll-panel__icon" src={sort} alt="" />
              <p className="controll-panel_text">Sort</p>
            </div>
            <div className="controll-panel__item">
              <img className="controll-panel__icon" src={filter} alt="" />
              <p className="controll-panel_text">Filter</p>
            </div>
            <button className="controll-panel__add">+ Add ticker</button>
          </div>
          {/* controll panel end */}
          <table>
            <thead>
              <tr>
                <th>Ticket details</th>
                <th>Customer name</th>
                <th>Date</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TicketPage;
