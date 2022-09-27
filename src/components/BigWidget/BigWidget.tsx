import React from 'react';
import SmallWidget from '../SmallWidget';
import chart from '../../asset/chart.png';
import './BigWidget.scss';

const BigWidget = () => {
  return (
    <div className="big-widget">
      <div className="big-widget__chart">
        <img src={chart} alt="" />
      </div>
      <div className="big-widget__group">
        <SmallWidget title="Resolved" value="449" border />
        <SmallWidget title="Received" value="426" border />
        <SmallWidget title="Average first response time" value="33m" border />
        <SmallWidget title="Average response time" value="3h 8m" border />
        <SmallWidget title="Resolution within SLA" value="94%" border />
      </div>
    </div>
  );
};

export default BigWidget;
