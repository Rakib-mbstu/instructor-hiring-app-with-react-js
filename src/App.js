import "./App.css";
import CardModel from "./components/CardModel";

function App() {
  const mockData = ["java","Python","C++"]
  return (
    <>
      <div className="card-container">
        {" "}
        <CardModel name={"mir"} description={"An unexperienced WebDev that can do nothing...!"} expertise={mockData} ></CardModel>
        <CardModel expertise={[]}></CardModel>
        <CardModel></CardModel>
        <CardModel></CardModel>
        <CardModel></CardModel>
        <CardModel></CardModel>
      </div>
    </>
  );
}

export default App;
