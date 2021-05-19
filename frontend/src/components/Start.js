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
      <Header title="" basket="basket" />
      <div className="cards_block">
        <div>
          <div className="name">Pizza Verona</div>
          <div className="card_restaurant pizza_bg">
            <CardRestorant title="" desc="" onClick={() => {this.navigateToRest("pizza")}}/>
          </div>
        </div>
        <div>
          <div className="name">Arigato</div>
          <div className="card_restaurant sushi_bg">
            <CardRestorant title="" desc="" onClick={() => {this.navigateToRest("sushi")}}/>
          </div>
        </div>
        <div>
          <div className="name">Kannam Chicken</div>
          <div className="card_restaurant chicken_bg">
            <CardRestorant title="" desc="" onClick={() => {this.navigateToRest("chicken")}}/>
          </div>
        </div>
        
      </div>
      <Footer />
    </div>
    )
  }
}