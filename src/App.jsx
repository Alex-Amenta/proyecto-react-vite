import CharacterList from "./components/CharacterList";

function App() {
  return <div className='bg-dark text-white'>
      <img className="mx-auto d-block" width="500" src="https://1000marcas.net/wp-content/uploads/2022/04/Rick-and-Morty.png" alt="Rick And Morty" />
      {/* <h1 className="text-center display-1 py-4">Rick and Morty</h1> */}
      <CharacterList />
    </div>
}

export default App;
