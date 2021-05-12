const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
app.use(cors())
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: 'ghjcgtrn980',
  database: 'delivery'
});

connection.connect((err) => {
  if (err) {
      console.log(err);
  } else {
      console.log("База данных подключена!!!");
  }
});

app.get('/menu/:restaurant_id', (req, res) => {
  connection.query(`
    SELECT * FROM menu WHERE restaurant_id = ${req.params.restaurant_id}
  `, (err, data) => {
    if (err) {
      res.status(500).json({ message: "SOORRYYYY!!!!", err })
      return
    }
    res.json(data)
  })
})

app.get('/basket/:basket_id', (req, res) => {
  connection.query(`
    SELECT * FROM baskets WHERE basket_id = '${req.params.basket_id}'
  `, (err, data) => {
    if (err) {
      res.status(500).json({ message: "SOORRYYYY!!!!", err })
      return
    }
    res.json(data)
  })
})

app.get('/order/:basket_id', (req, res) => {
  connection.query(`
    SELECT * FROM orders WHERE basket_id = ${req.params.basket_id}
  `, (err, data) => {
    if (err) {
      res.status(500).json({ message: "SOORRYYYY!!!!", err })
      return
    }
    res.json(data)
  })
})

app.post('/basket', (req, res) => {
  const newBasket = req.body;
  let basketDb = [
    newBasket.dish_name, 
    newBasket.quantity, 
    newBasket.price,
    newBasket.basket_id, 
    newBasket.restaurant_id
  ]

  connection.query(`
  INSERT INTO baskets (dish_name, quantity, price, basket_id, restaurant_id)
  VALUES (?);`, [basketDb],
  (err, data) => {
    if (err) {
      res.status(500).json({ message: "SOORRYYYY!!!!", err })
      return
    }
    connection.query(`
      SELECT * FROM baskets WHERE basket_id = '${newBasket.basket_id}'
    `, (err2, data2) => {
      if (err2) {
        res.status(500).json({ message: "SOORRYYYY!!!!", err2 })
        return
      }
      res.json(data2)
    })
  }) 
})

app.post('/order/:basket_id', (req, res) => {
  const newOrder = req.body;
  let orderDb = [
    newOrder.first_name, 
    newOrder.last_name, 
    newOrder.phone_number,
    newOrder.delivery_address, 
    newOrder.pickup_delivery,
    newOrder.basket_id
  ]

  connection.query(`
  INSERT INTO orders (first_name, last_name, phone_number, delivery_address, pickup_delivery, basket_id, date_time_order)
  VALUES (?, NOW());`, [orderDb],
  (err, data) => {
    if (err) {
      res.status(500).json({ message: "SOORRYYYY!!!!", err })
      return
    }
    connection.query(`
      SELECT * FROM orders WHERE basket_id = '${newBasket.basket_id}'
    `, (err2, data2) => {
      if (err2) {
        res.status(500).json({ message: "SOORRYYYY!!!!", err2 })
        return
      }
      res.json(data2)
    })
  }) 
})







// app.delete('/users/:id', (req, res) => {
//   const idOfusers = parseInt(req.params.id);
//   // const productIdx = products.findIndex((product) => product.id === idOfProducts);

//   // if (productIdx !== -1) {
//   //     products.splice(productIdx, 1)
//   //     res.json(products);
//   // } else {
//   //     res.status(404).json();
//   // }
//   connection.query(`
//     DELETE FROM users
//     WHERE user_id = ${idOfusers};`,
//     (err, data) => {
//       if (err) {
//         res.status(500).json({ message: "SOORRYYYY!!!!", err })
//         return
//       }
//     res.status(200).json(users)
//   })
// })






















app.listen(3010, () => {
  console.log('Сервер запущен!!!');
})