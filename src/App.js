
import "./App.css";
import CardModel from "./components/CardModel";
import MockDataGiver from "./components/mockdata";
import SideDiv from "./components/SideDiv";
import Navbars from "./components/Navbar";
import { useState } from "react";

function App() {
  const mockData = MockDataGiver();
  const originData = [...mockData];
  const [viewData,setViewData] = useState(mockData);
  return (
    <>
    <Navbars originData={originData} viewData={viewData} setViewData={setViewData}/>
      <div className="main">
        <div className="SideBar">
          <SideDiv/>
        </div>
        <div className="card-container">
          {viewData &&
            viewData.map((data, i) => (
              <CardModel
                key={i}
                name={data.first_name}
                description={data.description}
                expertise={[data.expertise]}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default App;
