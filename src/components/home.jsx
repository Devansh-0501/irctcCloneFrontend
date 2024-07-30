import React from "react";
import img3 from "../assets/upleft.png";
import img4 from "../assets/upright.png";
import imgC1 from'../assets/5.jpg';
// import imgC2 from'../assets/5.jpg';
import "../styles/home.css";
import CardSmall from "./cardSmall";
import CardBig from "./cardBig";
import TrainSearch from "./trainSearch";
const home = () => {
  return (
    <>
      <div className="home">
        <div className="leftHome">
          <div className="container">
            <div className="up">
              <div className="upleft">
                <img src={img3} style={{ marginLeft: "1.5rem" }} alt="" />
                <p>PNR STATUS</p>
              </div>
              <div className="upleft">
                <img src={img4} style={{ marginLeft: "1.5rem" }} alt="" />
                <p>CHARTS/VACANCY</p>
              </div>
            </div>
            <div className="mid">
              <h2
                style={{
                  fontSize: "2.3rem",
                  fontWeight: "700",
                  color: "#213d77",
                }}
              >
                BOOK TICKET
              </h2>
            </div>
            <div className="low">
               <TrainSearch/>
            </div>
          </div>
        </div>
        <div className="rightHome">
          <h1>INDIAN RAILWAYS</h1>
          <h2>SAFETY | SECURITY | PUNCTUALITY</h2>
        </div>
      </div>
      <section>
        <div className="sectionUp">
          <h1 style={{fontSize:"2rem", fontWeight:"700"}}>
            Have you not found the right one?
            <br />
            Find a service suitable for you here.
          </h1>
        </div>
        <div className="sectionCard">
            <CardSmall image={imgC1} heading="Flights"/>
            <CardSmall image={imgC1} heading="Flights"/>
            <CardSmall image={imgC1} heading="Flights"/>
            <CardSmall image={imgC1} heading="Flights"/>
            <CardSmall image={imgC1} heading="Flights"/>
            <CardSmall image={imgC1} heading="Flights"/>
            <CardSmall image={imgC1} heading="Flights"/>
            <CardSmall image={imgC1} heading="Flights"/>
            
        </div>
     <h1 style={{fontSize:"4rem"}}>HOLIDAYS</h1>
      <div className="bigCard">
        <CardBig image='https://www.irctc.co.in/nget/assets/images/exterior.jpg' heading="Maharajas' Express" msg="Redefining Royalty, Luxury and Comfort, Maharajas' express takes you on a sojourn to the era of bygone stately splendour of princely states. Sylvan furnishings, elegant ambience and modern amenities are amalgamated for an “Experience Unsurpassed”. It has been a winner of “World’s Leading Luxury train” by World Travel Awards consecutively for last six years"/>
        <CardBig image='https://www.irctc.co.in/nget/assets/images/exterior.jpg' heading="Maharajas' Express" msg="Redefining Royalty, Luxury and Comfort, Maharajas' express takes you on a sojourn to the era of bygone stately splendour of princely states. Sylvan furnishings, elegant ambience and modern amenities are amalgamated for an “Experience Unsurpassed”. It has been a winner of “World’s Leading Luxury train” by World Travel Awards consecutively for last six years"/>
        <CardBig image='https://www.irctc.co.in/nget/assets/images/exterior.jpg' heading="Maharajas' Express" msg="Redefining Royalty, Luxury and Comfort, Maharajas' express takes you on a sojourn to the era of bygone stately splendour of princely states. Sylvan furnishings, elegant ambience and modern amenities are amalgamated for an “Experience Unsurpassed”. It has been a winner of “World’s Leading Luxury train” by World Travel Awards consecutively for last six years"/>
        <CardBig image='https://www.irctc.co.in/nget/assets/images/exterior.jpg' heading="Maharajas' Express" msg="Redefining Royalty, Luxury and Comfort, Maharajas' express takes you on a sojourn to the era of bygone stately splendour of princely states. Sylvan furnishings, elegant ambience and modern amenities are amalgamated for an “Experience Unsurpassed”. It has been a winner of “World’s Leading Luxury train” by World Travel Awards consecutively for last six years"/>
        <CardBig image='https://www.irctc.co.in/nget/assets/images/exterior.jpg' heading="Maharajas' Express" msg="Redefining Royalty, Luxury and Comfort, Maharajas' express takes you on a sojourn to the era of bygone stately splendour of princely states. Sylvan furnishings, elegant ambience and modern amenities are amalgamated for an “Experience Unsurpassed”. It has been a winner of “World’s Leading Luxury train” by World Travel Awards consecutively for last six years"/>
        <CardBig image='https://www.irctc.co.in/nget/assets/images/exterior.jpg' heading="Maharajas' Express" msg="Redefining Royalty, Luxury and Comfort, Maharajas' express takes you on a sojourn to the era of bygone stately splendour of princely states. Sylvan furnishings, elegant ambience and modern amenities are amalgamated for an “Experience Unsurpassed”. It has been a winner of “World’s Leading Luxury train” by World Travel Awards consecutively for last six years"/>
      </div>
      </section >
    </>
  );
};

export default home;
