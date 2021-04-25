import React from 'react';

function BtnComponent(props) {
  return (
    <div>
      {(props.status === 0)? 
        <button className="stopwatch-btngym stopwatch-btn-gregym"
        onClick={props.start}>Start</button> : ""
      }

      {(props.status === 1)? 
        <div>
          <button className="stopwatch-btngym stopwatch-btn-redgym"
                  onClick={props.stop}>Stop</button>
          <button className="stopwatch-btngym stopwatch-btn-yelgym"
                  onClick={props.reset}>Reset</button>
        </div> : ""
      }

     {(props.status === 2)? 
        <div>
          <button className="stopwatch-btngym stopwatch-btn-gregym"
                  onClick={props.resume}>Resume</button>
          <button className="stopwatch-btngym stopwatch-btn-yelgym"
                  onClick={props.reset}>Reset</button>
        </div> : ""
      }
     
    </div>
  );
}

export default BtnComponent;