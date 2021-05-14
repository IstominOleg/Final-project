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
      <Header title="Типо название лого и все такое прочее" basket="basket" />
      <div className="cards_block">
        <div className="card_restaurant">
          <CardRestorant title="Pizza" image="images/pizza.jpg" desc="Vkysnai pizza" onClick={() => {this.navigateToRest("pizza")}}/>
        </div>
        <div className="card_restaurant">
          <CardRestorant title="Sushi" desc="Vkysnai Sushi" onClick={() => {this.navigateToRest("sushi")}}/>
        </div>
        <div className="card_restaurant">
          <CardRestorant title="Chicken" desc="Vkysnai Chicken" onClick={() => {this.navigateToRest("chicken")}}/>
        </div>
      </div>
      <Footer />
    </div>
    )
  }
}