import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from 'react-calendar-material';

ReactDOM.render(
  <Calendar
    accentColor={'blue'}
    orientation={'flex-col'}
    showHeader={false}
    onDatePicked={(d) => {
      console.log('onDatePicked', d);
    }}/>,
  document.getElementById('root')
);
