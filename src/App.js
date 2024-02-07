import { useState } from "react";
import { Body } from "./components/Body";
import { Header } from "./components/Header";

function App() {
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(0);

  return (
    <div className="px-20">
      <Header wpm={wpm} accuracy={accuracy} />
      <Body setWpm={setWpm} setAccuracy={setAccuracy} />
    </div>
  );
}

export default App;
