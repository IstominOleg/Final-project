import React, { Component } from 'react';
import Header from './Header';

export default class Basket extends Component {
  state = {
    basket: [],
    loading: true
  }
  componentDidMount = () => {
    this.setState({ loading: true })
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    const basket_id = localStorage.getItem("basket_id")
    fetch(`http://localhost:3010/basket/${basket_id}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        let aggBasket = result.reduce((acc, elem) => {
          let dish = acc.find((el) => el.dish_name === elem.dish_name)
          if (!dish) {
            return [...acc, elem]
          }
          dish.quantity += elem.quantity
          return acc
        }, [])
        this.setState({ loading: false, basket: aggBasket })
        console.log(result)
        console.log(aggBasket);
      })
      .catch(error => console.log('error', error));
  }
  render() {
    return (
    <div>
      <div>
        <Header title="Корзина"/>
      </div>
      <div>
      <ul>
          {this.state.basket.map((elem, idx) => {
            return (
              <li key={elem.id}>
                <div className="card_menu">
                  <div>
                    {elem.dish_name}
                  </div>
                  <div>
                    Стоймость: {elem.price*elem.quantity}
                  </div>
                  <div>
                    Кол-во: {elem.quantity}
                  </div>
                  <div type="button" onClick={() => this.handlClick(idx)}>Убрать из корзины</div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
    )
  }
}