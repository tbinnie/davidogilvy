import "./App.css";
import Head from "./components/Head";
import Players from "./components/Players";

function App() {
  return (
    <div className="App bg-[url('./imgs/background-trim.png')] h-screen flex flex-col bg-center bg-cover">
      <Head />
      <Players />
    </div>
  );
}

export default App;
