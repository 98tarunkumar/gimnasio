import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";
import Form from "../Form/Form";
import Posts from "../Posts/Posts";
import Todo from "../Todotaks/Todo"
import "./Blog.css";
import NavBlog from "./NavBlog";


function BLog() {

    const [currentId,setCurrentId]=useState(0);
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getPosts())
    },[currentId,dispatch])
  return (
    <div className="metro">
        <div className="navbar">
            <NavBlog/>
        </div>
      <div className="area1">
        
        <div className="post0">
            <Posts setCurrentId={setCurrentId} />
        </div>
        <div className="form1">
            <Form currentId={currentId} setCurrentId={setCurrentId}/>
        </div>
        <div className="form2">
          <Todo />
        </div>
        
      </div>
      <div className="footer">
        <div className="footer_left">
          <span>
            WORKOUT
          </span>
          <span>
            YOGA
          </span>
          <span>
            CALISTENICS
          </span>
        </div>
        <div className="footer_right">
          <input type="text" placeholder="Email" >
          </input>
          <h2>Subscribe </h2>
        </div>
      </div>
    </ div>
  );
}

export default BLog;
