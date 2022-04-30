import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Prosuctdeatils from "./Prosuctdeatils";
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
//import { solid} from '@fortawesome/fontawesome-svg-core/import.macro' ;
//import faStyles from 'font-awesome/css/font-awesome.css'

export default function Home() {
  const [result, setResult] = useState([]);
  const [show, setShow] = useState(false);
  const [btn, setBtn] = useState(true);
  const [image, setImage] = ('');

  useEffect(() => {

    const url = `https://fakestoreapi.com/products/categories`;
    fetch(url)
      .then((res) => res.json())
      .then((responce) => {
        setResult(responce);

        console.log("Responce is", responce);
      });
  }, []);

  const hideHandle = () => {
    setShow(true);
    setBtn(false);
  };

 
  // jewelery
  // men's clothing
  // women's clothing

  return (
    <>
      {/* */}
      {btn ? (
        <button
          type="button"
          class="btn btn-secondary btn-lg btn-block"
          onClick={hideHandle}
        >
          All Category
        </button>
      ) : null}

      {show
        ? result.map((item) => (
            <>
              <div
                className="card"
                style={{
                  width: "28rem",
                  height: "20rem",
                  display: "inline-block",
                  backgroundColor: "gray",
                }}
              >
                {/* <img className="card-img-top" src={image} alt="Card image cap"/> */}
                <div className="card-body">
                  {/* <h5 className="card-title">{item}</h5> */}

                  <Link
                    to="/details"
                    style={{
                      color: "blue",
                      textTransform: "uppercase",
                      fontSize: "20px",
                      textAlign: "center",
                    }}
                  >
                    {item}
                  </Link>
                </div>
              </div>
            </>
          ))
        : null}
      
    </>
  );
}

