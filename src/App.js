import "./App.css";
import rectangle from "./images/Rectangle 2.png";
import Test from "./Components/test";

function App() {
  return (
    <div className="App">
      <div className="headerDiv">
        <img src={rectangle} alt="flowers" />
        <div className="headerTexts">
          <div className="text1"> Thur 9</div>
          <div className="text2">6:23 AM</div>
        </div>
      </div>
      <Test />
    </div>
  );
}

export default App;
