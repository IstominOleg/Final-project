import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//   const top = 50 + rand();
//   const left = 50 + rand();

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  // const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [orderCreated, setOrderCreated] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    if (!orderCreated) {
      setOpen(false)
    }
  };

  const handleOrderCreated = () => {
    setOrderCreated(true)
  }
  // const body = (
    
  // );

  return (
    <div>
      <button className="submit_button" type="button" onClick={handleOpen}>
        Оформить заказ
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div className="modal_blok">
          <div className="modal">
            {!orderCreated ? (
            <>
              <div className="content">
                <div id="simple-modal-title">
                  Заполните форму
                </div>
                <div id="simple-modal-description">
                  <label>
                    <input type="text" placeholder="Имя" />
                  </label>
                  <label>
                    <input type="text" placeholder="Фамилия"/>
                  </label>
                  <label>
                    <input type="number" placeholder="Номер телефона" />
                  </label>
                  <label>
                    <input type="textarea" placeholder="Адрес доставки" />
                  </label>
                  <label>
                    Доставка&nbsp;
                    <input type="checkbox"/>&nbsp;
                    Самовывоз&nbsp;
                    <input type="checkbox"/>&nbsp;
                  </label>
                </div>
              </div>
              <div className="modal_button_block">
                <button className="modal_button" type="button" onClick={handleOrderCreated}>
                Отправить
                </button>
              </div>
            </>
            ) : ( <div className="end">
                    <div>заказ успешно<br/><br/> отправлен!</div>
                  </div>
                )}
          </div>
        </div>
      </Modal>
    </div>
  );
}