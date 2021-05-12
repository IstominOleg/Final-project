import { Route } from 'react-router-dom';
import Start from './components/Start';
import Restaurant from './components/Restaurant';
// import Basket from './components/Basket';

function App() {
  return (
    <div>
      <Route path="/" exact component={Start} />
      <Route path="/menu/:restaurant_id" exact component={Restaurant} />
      {/* <Route path="/basket/:basket_id" exact component={Basket} /> */}
      {/* <Route path="/order/:basket_id" exact component={Start} /> */}
      {/* <Route path="/" exact component={Start} />
      <Route path="/" exact component={Start} /> */}
    </div>
  );
}

export default App;
