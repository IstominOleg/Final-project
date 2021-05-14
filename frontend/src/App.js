import { Route } from 'react-router-dom';
import Start from './components/Start';
import Restaurant from './components/Restaurant';
import Basket from './components/Basket';

const generateBasketId = () => {
  let resString = '';
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const length = Math.floor(10 + Math.random() * 100);
  for (let i = 0; i < length; i++){
    resString += letters[Math.floor(Math.random() * (letters.length - 1))];
  }
  return resString;
}

localStorage.setItem("basket_id", generateBasketId())

function App() {
  return (
    <div>
      <Route path="/" exact component={Start} />
      <Route path="/menu/:restaurant_id" exact component={Restaurant} />
      <Route path="/basket" exact component={Basket} />
      {/* <Route path="/order/:basket_id" exact component={Start} /> */}
      {/* <Route path="/" exact component={Start} />
      <Route path="/" exact component={Start} /> */}
    </div>
  );
}

export default App;
