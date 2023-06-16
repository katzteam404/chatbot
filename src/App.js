import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      gender: '',
      age: '',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, gender } = steps;

    this.setState({ name, gender });
  }

  render() {
    const { name, gender } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{gender.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

class SimpleForm extends Component {
  render() {
    return (
      <ChatBot
        steps={[
          {
            id: '1',
            message: 'Hi Friend, may I know your good name please?',
            trigger: 'name',
          },
          {
            id: 'name',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Nice name, so, {previousValue}, out of the following, please select one option',
            trigger: 'gender',
          },
          {
            id: 'gender',
            options: [
              { value: 'select a car', label: 'Select a car', trigger: '5' },
              { value: 'select a dealer', label: 'Select a dealer', trigger: '5' },
              { value: 'select a service', label: 'Select a service', trigger: '5' },
              { value: 'selet an insurance', label: 'Selet an insurance', trigger: '5' },
              { value: 'test drive', label: 'Test drive', trigger: '5' },
            ],
          },
          {
            id: '5',
            message: 'Thank you for selecting the option, I hope i can suggest you the best option for you, please provide some more details please',
            trigger: 'age',
          },
          {
            id: 'age',
            message: 'can I have your mobile please',
            trigger: 'mobile',            
          },
          {
            id: 'mobile',
            user:true,
            trigger: 'confirm',            
          },          
          {
            id: 'confirm',
            message: 'It seems you have already been here, is this is your mail id? johndoe@gmail.com',
            trigger: 'confirmEmail',            
          },
          {
            id: 'confirmEmail',
            options: [
              { value: 'Yes', label: 'Yes', trigger: 'carQuestion1' },
              { value: 'No', label: 'No', trigger: 'inputEmailQuery' },
            ],
          },          
          {
            id: 'inputEmailQuery',
            message: 'Please enter your email address',
            trigger: 'inputEmail',            
          },
          {
            id: 'inputEmail',
            user:true,
            trigger: 'carQuestion1',            
          },
          
          {
            id: 'carQuestion1',
            message: 'I need some more details to identify the best car for you, Your age?',
            trigger: 'carAnswer1',
          },
          {
            id: 'carAnswer1',
            user:true,
            trigger: 'carQuestion2Options',            
          },



          {
            id: 'carQuestion2Options',
            message: 'What kind of car you are looking for?',
            trigger: 'carQuestion2',
          },          

          {
            id: 'carQuestion2',
            options: [
              { value: 'SUV', label: 'SUV', trigger: 'carAnswer2' },
              { value: 'Sedan', label: 'Sedan', trigger: 'carAnswer2' },
              { value: 'Hatchback', label: 'Hatchback', trigger: 'carAnswer2' },
              { value: 'Crossover', label: 'Crossover', trigger: 'carAnswer2' },
              { value: 'Convertable', label: 'Convertable', trigger: 'carAnswer2' },
            ],     
          },          

          {
            id: 'carAnswer2',
            message: 'You location?',
            trigger: 'carQuestion3',
          },

          {
            id: 'carQuestion3',
            options: [
              { value: 'Perth', label: 'Perth', trigger: 'carAnswer3' },
              { value: 'Sydney', label: 'Sydney', trigger: 'carAnswer3' },
              { value: 'Canberra', label: 'Canberra', trigger: 'carAnswer3' },
              { value: 'Melbourne', label: 'Melbourne', trigger: 'carAnswer3' },
              { value: 'Gold Coast', label: 'Gold Coast', trigger: 'carAnswer3' },
            ],             
          },         
          
          
          {
            id: 'carAnswer3',
            message: 'Thanks for your input',
            trigger: 'final',            
          },          


          {
            id: 'final',
            message: 'your best option for a new car is ABCD, because, we have good service for this model in the selected area and it suites your purpose too.',
            trigger: 'end-message',            
          },                          
          {
            id: 'end-message',
            message: 'if you are not much specific to the area, you can choose model XYZ, because this model is best selling for the purpose.',
            end: true,
          },
        ]}
      />
    );
  }
}

export default SimpleForm;