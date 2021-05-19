import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer'

export default class Restorant extends Component {
  state = {
    menu: []
  }
  componentDidMount() {
    let identifierRestaurant = this.props.match.params.restaurant_id;
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`http://localhost:3010/menu/${identifierRestaurant}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        this.setState({ menu: result})
      })
      .catch(error => console.log('error', error));
  }
  handlClick = (idx) => {
    
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      dish_name: this.state.menu[idx].name,
      quantity: 1,
      price: this.state.menu[idx].price,
      basket_id: localStorage.getItem("basket_id"),
      restaurant_id: this.state.menu[idx].restaurant_id
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://localhost:3010/basket", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  render() {
    const {restaurant_id} = this.props.match.params;
    let name;
    let basket;
    if (restaurant_id === "pizza") {
      name = "Pizza Verona"
    } else if (restaurant_id === "sushi") {
      name = "Arigato"
    } else if (restaurant_id === "chicken") {
      name = "Kannam Chicken"
    } else {
      basket = "basket"
    }
    return (
    <div>
      <div>
        <Header title={name} basket={basket}/>
      </div>
      <div className="cards_block">
        <ul>
          {this.state.menu.map((elem, idx) => {
            return (
              <li key={elem.id}>
                <div className="card_menu">
                  <div>
                    {elem.name}
                  </div>
                  <div>
                    {elem.price} руб.
                  </div>
                  <div>
                    {elem.description}
                  </div>
                  <div><span>-</span>Кол-во<span>+</span></div>
                  <div type="button" onClick={() => this.handlClick(idx)}>Добавить в корзину</div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
      <div>
        <Footer />
      </div>
    </div>
    )
  }
}