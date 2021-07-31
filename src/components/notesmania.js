import React from "react";
import image from "../images/n.webp";
import Footer from "./footer";
const Notesmania = () => {
  return (
    <>
      <figure className="relative">
        <img
          src={image}
          style={{
            width: "100%",
            height: "600px",
            opacity: "0.9",
            background: "#111111",
            background: "cover",
          }}
          className="img-fluid"
          alt=""
        ></img>
        <fig style={{ position: "absolute", top: "200px", left: "30%" }}>
          <p className="container text-light">
            <div className="text-center font-weight-bold">
              <h1>Welcome to NotesMania!</h1>
            </div>
            <p className="text-center">
              <p className="mb-0">
                <h5>
                  At NotesMania,We had tried to make less burden for you to make
                </h5>
              </p>
              <p>
                <h5>concise notes for your studies,work or anything.</h5>
              </p>
              <h2>What waiting for!</h2>
              <a
                className="btn  font-weight-bold text-white btn-lg btn-outline-secondary"
                style={{
                  transition: "0.5s ease",
                  borderRadius: "50px",
                }}
                href="http://localhost:3000/update"
              >
                Create
              </a>
            </p>
          </p>
        </fig>
      </figure>
      <Footer></Footer>
    </>
  );
};
export default Notesmania;
