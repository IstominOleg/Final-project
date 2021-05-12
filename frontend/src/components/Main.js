import React, { Component } from 'react';
import Pizza from './Pizza';
import Sushi from './Sushi';
import Chicken from './Сhicken';

export default class Main extends Component {
  render() {
    return (
    <div>
      <Pizza />
      <Sushi />
      <Chicken />
    </div>
    )
  }
}