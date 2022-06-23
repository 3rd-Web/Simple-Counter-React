//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import PropTypes from "prop-types";

//render your react application
const SecondsCounter = (props) => {
    return (
    <div className="container-fluid bg-warning text-dark d-flex display-1 justify-content-center align-items-center">
  <div className="row">
    <div className="col text-light">
       <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" classNameName="bi bi-clock" viewBox="0 0 16 16">
            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
             <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/></svg>
    </div>
    <div className="col">
      {props.digitFour % 10}
    </div>
    <div className="col">
      {props.digitThree % 10}
    </div>
    <div className="col">
      {props.digitTwo % 10}
    </div>
    <div className="col">
      {props.digitOne % 10}
    </div>
  </div>
</div>

    );
  };
  
  SecondsCounter.propTypes = {
    digitOne: PropTypes.number,
    digitTwo: PropTypes.number,
    digitThree: PropTypes.number,
    digitFour: PropTypes.number,
  };
  
  let counter = 0;
  setInterval(function(){
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter/1);
    console.log(four, three, two, one)
    counter++;

  ReactDOM.render(<SecondsCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four}/>,
  document.querySelector("#app")
  );
}, 1000); 