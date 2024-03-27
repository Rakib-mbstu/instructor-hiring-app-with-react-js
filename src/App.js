import "./App.css";
import CardModel from "./components/CardModel";
import MockDataGiver from "./components/mockdata";

function App() {
  const mockData = MockDataGiver();
  console.log(mockData);
  return (
    <>
      <div className="card-container">
        {
          mockData && mockData.map((data,i)=>(
            <CardModel key={i} name={data.first_name} description={data.description} expertise={[data.expertise]}/>
          ))
        }
      </div>
    </>
  );
}

export default App;
