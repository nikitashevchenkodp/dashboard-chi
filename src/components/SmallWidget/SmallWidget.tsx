import classNames from 'classnames';
import React from 'react';
import './SmallWidget.scss';

type SmallWidgetProps = {
  title: string;
  value: string | number;
  border?: boolean;
};

const SmallWidget = ({ title, value, border }: SmallWidgetProps) => {
  const widgetClases = classNames({
    'small-widget': true,
    'small-widget--with_border': border,
  });

  return (
    <div className={widgetClases}>
      <div className="small-widget__title">{title}</div>
      <div className="small-widget__value">{value}</div>
    </div>
  );
};

export default SmallWidget;
