import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer'

export default class Restorant extends Component {
  state = {
    menu: [],
    basket: []
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
    
      const requestOptions2 = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch(`http://localhost:3010/basket/${localStorage.getItem("basket_id")}`, requestOptions2)
        .then(response => response.json())
        .then(result => {
          this.setState({basket: result})
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
      .then(result => {
        this.setState({basket: result})
      })
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
        <Header title={name} basket={this.state.basket}/>
      </div>
      <div className="cards_block">
        <div className="cards_wraper">
          <ul>
            {this.state.menu.map((elem, idx) => {
              return (
                <li key={elem.id}>
                  <div className="card_menu">
                    <div className="card_menu_col">
                      <div>
                        {elem.name}
                      </div>&nbsp;
                      <div>
                        {elem.description}
                      </div>&nbsp;
                    </div>
                    <div className="card_menu_col">
                      <div>
                        ????????: {elem.price} ??????.
                      </div>
                      {/* <div><span>-</span>??????-????<span>+</span></div> */}
                      <div className="button" type="button" onClick={() => this.handlClick(idx)}>???????????????? ?? ??????????????</div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
    )
  }
}