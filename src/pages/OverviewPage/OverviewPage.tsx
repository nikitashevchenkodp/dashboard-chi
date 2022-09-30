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
          <SmallWidget style={{ borderRadius: '8px' }} title={'Unresolved'} value={60} border />
          <SmallWidget style={{ borderRadius: '8px' }} title={'Overdue'} value={16} border />
          <SmallWidget style={{ borderRadius: '8px' }} title={'Open'} value={43} border />
          <SmallWidget style={{ borderRadius: '8px' }} title={'On hold'} value={64} border />
        </div>
        <BigWidget />
        <div className="widgets__container--md">
          <UnresolvedTicketsWidget />
          <TasksWidget />
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
