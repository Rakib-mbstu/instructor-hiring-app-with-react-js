import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const spanStyle = {
  padding: "20px",
  color: "#f2f2f2",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "600px",
};
const slideImages = [
  {
    url: "/img/2.jpg",
    caption: "Offer",
  },
  {
    url: "/img/3.jpg",
    caption: "Offer 2",
  },
  {
    url: "/img/1.jpeg",
    caption: "Offer 3",
  },
];

export const Slideshow = () => {
  return (
    <div className="slide-container d-none d-lg-block">
      <Slide>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            >
              <span style={{spanStyle,fontSize:'100px'}}>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};
