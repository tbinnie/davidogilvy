import Gallery from "./components/Gallery";
import Head from "./components/Head";
import Players from "./components/Players";

function App() {
  return (
    <div className="App">
      <Head />
      <div className="mainsite w-[75%] ml-auto mr-0 bg-[url('./imgs/background-trim.png')] h-full bg-center bg-cover">
      <Players />
      <Gallery />
      </div>
    </div>
  );
}

export default App;
