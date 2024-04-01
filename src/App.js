import "./App.css";
import CardModel from "./components/CardModel";
import MockDataGiver from "./components/mockdata";
import Navbars from "./components/Navbar";
import { useEffect, useState } from "react";
import { Slideshow } from "./components/MidSection";
import ItemFilter from "./components/ItemFilter";

function App() {
  const mockData = MockDataGiver();
  const originData = [...mockData];
  const [viewData, setViewData] = useState(mockData);
  useEffect(()=>{
    document.title = "WELCOME"
  })
  return (
    <>
      <Navbars
        originData={originData}
        viewData={viewData}
        setViewData={setViewData}
      />
      <Slideshow />
      <div className="main">
        <div className="SideBar">
          <ItemFilter originalData={originData} viewData={viewData} setViewData={setViewData} />
        </div>
        <div className="card-container">
          {viewData &&
            viewData.map((data, i) => (
              <CardModel
                key={i}
                name={data.name}
                description={data.description}
                additional_description={data.additional_description}
                expertise={[...data.expertise]}
                consultation_fee={data.consultation_fee}
              />
            ))
            }
        </div>
      </div>
    </>
  );
}

export default App;
