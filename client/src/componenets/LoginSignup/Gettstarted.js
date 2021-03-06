import Login from './Login';
import React from 'react';
import Register from './Register';
import './Gettstarted.css'
class Gettstarted extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isLogginActive:true,
    }
  }
  changeState(){
    const {isLogginActive}=this.state;
    if(isLogginActive){
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    }
    else{
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState(prevState=>({isLogginActive:!prevState.isLogginActive}))
  }
  render(){
    const { isLogginActive}=this.state;
    const current=isLogginActive?"Register":"Login";
    const currentActive=isLogginActive ? "Login":"Register";
    return(
      <div className="App">
        <div className="login">
          <div className="containerL">
            {isLogginActive && <Login containerRef={ref=>this.current=ref}/>}
            {!isLogginActive && <Register containerRef={ref=>this.current=ref}/>}
          </div>
            <RightSide current={current} containerRef={ref=>this.rightSide=ref} onClick={this.changeState.bind(this)}/>
        </div>

      </div>
    )
  }
}

const RightSide=props=>
{
  return <div className="right-side" ref={props.containerRef} onClick={props.onClick}>
        <div className="inner-container">
                <div className="text-cont" >
                    {props.current}
                </div>
        </div>
    </div>
}

export default Gettstarted;