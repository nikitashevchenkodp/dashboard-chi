import React, { useState } from 'react';
import Button from '../Button';
import add from '../../asset/add.svg';
import './TasksWidget .scss';
import Priority from '../Priority';

const TasksWidget = () => {
  const [items, setItems] = useState([
    { title: 'Finish ticket update', progress: 'urgent' },
    { title: 'Create new ticket example', progress: 'new' },
    { title: 'Update ticket report', progress: 'default' },
  ]);

  const addItem = () => {
    console.log('Add new Task');
  };

  return (
    <div className="medium-widget">
      <div className="medium-widget__header">
        <div>
          <div className="medium-widget__title">Tasks</div>
          <div className="medium-widget__subtitle">
            <span className="medium-widget__group">Today</span>
          </div>
        </div>
        <Button type="button" variant="transparent">
          View all
        </Button>
      </div>
      <ul className="list">
        <li className="list__item">
          <p className="list__item-title gray">Create new task</p>
          <button onClick={addItem} className="button__add">
            <img src={add} alt="" />
          </button>
        </li>
        {items.map((item) => (
          <li key={item.title} className="list__item">
            <p className="list__item-title">{item.title}</p>
            <Priority status={item.progress} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TasksWidget;
