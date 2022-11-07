import React from "react";
import Footer from "../Footer/Footer";
import Slide from "../Slide/Slide";
import Card from "./Card";
import CardTwo from "./CardTwo";

const BlogHome = () => {
  const data = [
    {
      id: 1,
      titleOne: "YOU CAN CHANGE THE WORLD",
      titletwo: "STRONG STYLE",
      paraOne: "How Women are Redirecting Hollywood",
      paraTwo: "New Ways to Wear Denim Belt Bags make a Comeback",
      name: "By Jasmin Smith",
      subTitle: "How to Shop Mindfully",
      qrCode: "/images/qrcode.png",
      cover: "/Images/blog5.jpg",
    },
  ];
  return (
    <section className="home">
      <div className="left-content">
        {data.map((val) => {
          return (
            <>
              <div className="content">
                <div className="logo">
                  <h1>M</h1>
                </div>
                <div className="home-img">
                  <img src={val.cover} alt="" />
                </div>
                <div className="text">
                  <h1>{val.titleOne}</h1>
                  <p>{val.paraOne}</p>
                  <span>{val.subTitle}</span>
                </div>
                <div className="qrcode">
                  <img src={val.qrCode} alt="" />
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="right-content">
        <Slide />
        <Card />
        <CardTwo />
        <Footer />
      </div>
    </section>
  );
};

export default BlogHome;
