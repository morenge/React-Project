"use strict";

console.log("App.js is running");

//JSX - javascript XML

var template = React.createElement(
  "h1",
  null,
  "Indecision App."
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
