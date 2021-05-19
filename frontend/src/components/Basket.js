import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

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
        <Header title="Basket"/>
      </div>
      <div className="cards_block_basket">
      <ul className="list_basket">
          {this.state.basket.map((elem, idx) => {
            return (
              <li key={elem.id}>
                <div className="card_menu">
                    <div className="card_menu_col">
                      <div>
                        {elem.dish_name}
                      </div>&nbsp;&nbsp;
                      <div>
                        Кол-во: {elem.quantity}
                      </div>&nbsp;&nbsp;
                      <div>
                        Стоймость: {elem.price*elem.quantity}
                      </div>
                    </div>
                    <div className="card_menu_col">
                      <div className="button" type="button" onClick={() => this.handlClick(idx)}>Убрать из корзины</div>
                    </div>
                </div> 
              </li>
            )
          })}
        </ul>
      </div>
      <div className="submit_button" type="button">Оформить заказ</div>
      <div>
        <Footer />
      </div>
    </div>
    )
  }
}