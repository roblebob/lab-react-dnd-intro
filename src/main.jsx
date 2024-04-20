import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { observe } from "./data/Game.jsx";

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

const root = ReactDOM.createRoot(document.getElementById('root'));

observe((knightPosition) => root.render(
  <React.StrictMode>
    <App knightPosition={knightPosition}/>
  </React.StrictMode> 
));


