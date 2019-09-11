

class ComponentName extends React.Component {

  render() {
    return (
      <Calendar
      accentColor={'blue'}
      orientation={'flex-col'}
      showHeader={false}
      onDatePicked={(d) => {
        console.log('onDatePicked', d);
      }}/>,
    );
  }

};

export default ComponentName;
