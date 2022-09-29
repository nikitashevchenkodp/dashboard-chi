import React from 'react';
import BigWidget from '../../components/BigWidget';
import SmallWidget from '../../components/SmallWidget';
import TasksWidget from '../../components/TasksWidget ';
import UnresolvedTicketsWidget from '../../components/UnresolvedTicketsWidget';
import './OverviewPage.scss';

const OverviewPage = () => {
  return (
    <div className="container">
      <div className="overview__container">
        <div className="widgets__container">
          <SmallWidget title={'Unresolved'} value={60} border />
          <SmallWidget title={'Overdue'} value={16} border />
          <SmallWidget title={'Open'} value={43} border />
          <SmallWidget title={'On hold'} value={64} border />
        </div>
        <BigWidget />
        <div style={{ display: 'flex', gap: '30px' }}>
          <UnresolvedTicketsWidget />
          <TasksWidget />
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
