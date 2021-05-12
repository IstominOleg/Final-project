import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
// import Pizza from './Pizza';
// import Sushi from './Sushi';
// import Chicken from './Сhicken';
import CardRestorant from './CardRestorant'

export default class Start extends Component {
  navigateToRest = (restaurant_id) => {
    this.props.history.push(`/menu/${restaurant_id}`)
  }
  render() {
    return (
    <div>
      <Header title="Типо название" />
      <div>
        <CardRestorant title="Pizza" desc="Vkysnai pizza" onClick={() => {this.navigateToRest("pizza")}}/>
        <CardRestorant title="Sushi" desc="Vkysnai Sushi" onClick={() => {this.navigateToRest("sushi")}}/>
        <CardRestorant title="Chicken" desc="Vkysnai Chicken" onClick={() => {this.navigateToRest("chicken")}}/>
        {/* <Pizza />
        <Sushi />
        <Chicken /> */}
      </div>
      <Footer />
    </div>
    )
  }
}