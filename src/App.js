import Bio from "./components/Bio";
import Head from "./components/Head";
import Landing from "./components/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Head />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/bio" element={<Bio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
