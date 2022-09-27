import React, { useState } from 'react';
import Button from '../Button';
import './UnresolvedTicketsWidget.scss';
const MediumWidget = () => {
  const [items, setItems] = useState([
    { title: 'Waiting on Feature Request', value: 4238 },
    { title: 'Awaiting Customer Response', value: 1005 },
    { title: 'Awaiting Developer Fix', value: 914 },
    { title: 'Pending', value: 281 },
  ]);

  return (
    <div className="medium-widget">
      <div className="medium-widget__header">
        <div>
          <div className="medium-widget__title">Unresolved tickets</div>
          <div className="medium-widget__subtitle">
            <span className="medium-widget__group">Group:</span> Support
          </div>
        </div>
        <Button type="button" variant="transparent">
          View details
        </Button>
      </div>
      <ul className="list">
        {items.map((item) => (
          <li key={item.title} className="list__item">
            <p className="list__item-title">{item.title}</p>
            <p className="list__item-value">{item.value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MediumWidget;
