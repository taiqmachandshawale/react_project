import React from "react";
import "./index.css";
import Images from "./Images";

const Card = (props) => {
  return (
    <>
      <div className="cards">
        <div className="card">
          {/* <Images imgsrc={props.imgsrc} /> */}
          <img src={props.imgsrc} alt="myPic" className="card__img" />
          <div className="card__info">
            <span className="card__category">{props.title} </span>
            <h3 className="card__title">{props.sname}</h3>
            <a href={props.link} target="_blank">
              <button> Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
