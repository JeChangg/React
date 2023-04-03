import React, { useState } from 'react';

const App = () => {
  const [food, setFood] = useState('');
  const [jumlah, setJumlah] = useState('');

  const inputFood = (event) => {
    setFood(event.target.value);
  };
  const inputJumlah = (event) => {
    setJumlah(event.target.value);
  };

  return (
    <div style={{ padding: 5 }}>
      <h5>Dafter Makanan Yang Kami Sediakan : </h5>
      <form>
        <input
          type='text'
          value={food}
          onChange={inputFood}
        />
        <input type="number" value={jumlah} onChange={inputJumlah} />
        <button type="submit">Batalkan Semua Pesanan</button>
      </form>

      <h5>Pesanan Anda: {food}</h5>
      <h6>Jumlah Pesanan: {jumlah} </h6>
      
    </div>
  );
};

export default App;