import MenuUtama from './Page/MenuUtama.jsx';
import MenuMakanan from './Page/MenuMakanan'
import Input from './Page/Input.jsx';
import Header from './Page/Header.jsx';

function App() {
  return (
    <div className="App">
      <section>
        <Header/>
        <MenuMakanan/>
        <Input/>
      </section>
    </div>
  );
}

export default App;
