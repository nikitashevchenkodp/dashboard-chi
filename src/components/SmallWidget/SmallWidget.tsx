import classNames from 'classnames';
import React, { FC } from 'react';
import './SmallWidget.scss';

type SmallWidgetProps = {
  title: string;
  value: string | number;
  border?: boolean;
  style?: object;
};

const SmallWidget: FC<SmallWidgetProps> = ({ title, value, border, style }) => {
  const widgetClases = classNames({
    'small-widget': true,
    'small-widget--with_border': border,
  });

  return (
    <div className={widgetClases} style={style}>
      <div className="small-widget__title">{title}</div>
      <div className="small-widget__value">{value}</div>
    </div>
  );
};

export default SmallWidget;
