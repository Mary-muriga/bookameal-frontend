import React,{useState} from 'react'


const orderAPI = "https://bookameal-backend.herokuapp.com/orders"

export default function Order() {

  const [quantity] = useState()
  const [users_id] = useState()

  const [orders, setOrders] = useState([]);

  function addOrder(newOrder) {
    setOrders([...orders, newOrder]);
  }


  function handleSubmit(e) {
    e.preventDefault();
    fetch(orderAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
      quantity,
      users_id,
      }),
    })
      .then((r) => r.json())
      .then((newOrder) => addOrder(newOrder));
  }

  return (
    <div>
      <button onClick={handleSubmit}>Book</button>
      {/* You have successfully placed your order */}
      </div>
  )
}
