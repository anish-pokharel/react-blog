import React from "react";
import Cdata from "./Cdata";
import "./Card.css";

const Card = () => {
  return (
    <>
      <div className="card gird top ">
        {Cdata.map((val) => {
          return (
            <div className="box">
              {val.id}

              <div className="img">
                <img src={val.cover} alt="Card Images" />
              </div>
              <span>{val.category}</span>
              <h2>{val.title}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
