import classNames from 'classnames';
import React from 'react';
import './Priority.scss';

const Priority = ({ status }: { status: 'high' | 'normal' | 'low' }) => {
  const priotityClasses = classNames({
    priority: true,
    'priority--high': status === 'high',
    'priority--normal': status === 'normal',
    'priority--low': status === 'low',
  });

  return <div className={priotityClasses}>{status}</div>;
};

export default Priority;
