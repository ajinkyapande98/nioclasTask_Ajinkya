import Home from "./Components/Home";
import { MathJaxContext } from "better-react-mathjax";
function App() {
  return (
    <>
      <MathJaxContext>
        <Home />
      </MathJaxContext>
    </>
  );
}

export default App;
