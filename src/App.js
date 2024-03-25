import "./App.css";
import CardModel from "./components/CardModel";

function App() {
  return (
    <>
      <div className="card-container">
        {" "}
        <CardModel></CardModel>
        <CardModel></CardModel>
        <CardModel></CardModel>
        <CardModel></CardModel>
        <CardModel></CardModel>
        <CardModel></CardModel>
      </div>
    </>
  );
}

export default App;
