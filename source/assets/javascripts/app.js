import ComponentName from './components/ComponentName';

export class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {};
  }


  

  render() {
    return (
      <div>
        <ComponentName/>
      </div>
    )
  }

};

ReactDOM.render(<App />, document.getElementById('content'));
