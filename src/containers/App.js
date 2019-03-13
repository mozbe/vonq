import React from 'react';
import { hot } from 'react-hot-loader';
import update from 'immutability-helper';

import './App.css';
import Form from 'Components/Form';
import Summary from 'Components/Summary';
import { formData } from 'Data/formData';

class App extends React.Component {
  state = {
    editMode: true,
    data: formData,
  }

  onSubmit = (values) => {
    const newState = update(this.state, {
      editMode: { $set: false },
      data: {
        fields: {
          experience: { value: {$set: values.experience }},
          education: { value: {$set: values.education}},
          hours: { value: {$set: [values.hours.Min, values.hours.Max] }},
        },
      },
    });

    this.setState(newState);
  }

  onEdit = () => {
    this.setState({
      editMode: true,
    });
  }

  render() {
    const { data, editMode } = this.state;

    return (
      <div className="App">
        {{
          true: <Form onSubmitForm={this.onSubmit} data={data} />,
          false: <Summary onEdit={this.onEdit} data={data} />,
        }[editMode]}
      </div>
    );
  }
}

export default hot(module)(App);
