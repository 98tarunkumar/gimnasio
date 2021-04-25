import React from 'react'
import { useEffect,useState } from "react";

import { Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from 'react-router-dom';
import './vlog.css'


import {Container,AppBar,Typography,Grow,Grid} from '@material-ui/core'
import Form from "./componenets/Form/Form";
import Posts from "./componenets/Posts/Posts";
import useStyles from './styles'
import {useDispatch} from 'react-redux'
import {getPosts} from './actions/posts'
import Navbar from './componenets/Navbar/Navbar';


function Vlog() {
    const location = useLocation();
  
  const [currentId, setCurrentId] = useState(0);
  const classes = useStyles()
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getPosts())
  },[currentId, dispatch])
    return (
        <div className="bar">
        <Container maxWidth="lg">
            <Navbar/> 
            <Grow in>
          <Container>
            <Grid container  justify="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
              </Grid>
              <Grid item xs={12} sm={4}>
                
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
        </Container>
      </div>
    )
}

export default Vlog
