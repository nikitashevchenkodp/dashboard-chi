import classNames from 'classnames';
import React from 'react';
import './Priority.scss';

const Priority = ({ status }: { status: string }) => {
  const priotityClasses = classNames({
    priority: true,
    'priority--high': status === 'high',
    'priority--normal': status === 'normal' || status === 'new',
    'priority--low': status === 'low' || status === 'urgent',
    'priority--default': status === 'default',
  });

  return <div className={priotityClasses}>{status}</div>;
};

export default Priority;
