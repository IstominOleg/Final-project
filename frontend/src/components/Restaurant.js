import React, { Component } from 'react';
import Header from './Header';

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
  render() {
    const {restaurant_id} = this.props.match.params;
    let name;
    if (restaurant_id === "pizza") {
      name = "Пиццерия"
    } else if (restaurant_id === "sushi") {
      name = "Суши чето там"
    } else if (restaurant_id === "chicken") {
      name = "Про курицу ресторан"
    }
    return (
    <div>
      <div>
        <Header title={name} />
      </div>
      <div>
        <ul>
          {this.state.menu.map((elem) => {
            return (
              <li key={elem.id}>
                <div className="card_menu">
                  <div>
                    {elem.name}
                  </div>
                  <div>
                    {elem.price}
                  </div>
                  <div>
                    {elem.description}
                  </div>
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