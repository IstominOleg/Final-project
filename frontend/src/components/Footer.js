import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
    <div className="footer">
      <div className="logo_footer">Order food</div>
      <div className="cont">
        <div>Контакты разработчика</div>
        <div>Номер тел: +7-999-987-78-89</div>
        <div>E-mail: name_namber@mail.ru</div>
      </div>
    </div>
    )
  }
}