//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//Created by YOURNAME
//Copyright CURRENTYEAR.

import React from "react";
import ReactDOM from "react-dom";

const yourName = "AJ007p1";
//const year = prompt("enter year of copyright");
const currdate = new Date(2021, 5, 1);
const currYear = currdate.getFullYear();

console.log(currdate);
ReactDOM.render(
  <div>
    <p>Created by {yourName}</p>
    <p>Copyright {currYear}</p>
  </div>,
  document.getElementById("root")
);
