import React from 'react';

function FoodItem(props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <img src={props.image} alt={props.name} />
      <button onClick={props.onClick} style={{ marginTop: "10px" }}>Pesan Makanan</button>
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foodItems: [
        { id: 1, name: "Sate Padang", image: "https://via.placeholder.com/300x200?text=Sate Padang" },
        { id: 2, name: "Burger", image: "https://via.placeholder.com/300x200?text=Burger" },
        { id: 3, name: "Sushi", image: "https://via.placeholder.com/300x200?text=Sushi" },
      ],
      orderedItems: []
    };
  }

  handleOrder(item) {
    this.setState((prevState) => ({
      orderedItems: [...prevState.orderedItems, item]
    }));
  }

  render() {
    return (
      <div>
        <h1>Daftar Makanan</h1>
        <div style={{ display: "flex" }}>
          {this.state.foodItems.map(item => (
            <div key={item.id} style={{ marginRight: "20px" }}>
              <FoodItem
                name={item.name}
                image={item.image}
                onClick={() => this.handleOrder(item)}
              />
            </div>
          ))}
        </div>
        <h2>Pesanan Anda</h2>
        {this.state.orderedItems.map(item => (
          <p key={item.id}>{item.name}</p>
        ))}
      </div>
    );
  }
}

export default App;
