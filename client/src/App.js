import { useEffect, useState } from "react";
import Bot from "./componenets/Bot/Bot";
import Page1 from "./componenets/Pages/Page1/Page1";
import Page2 from "./componenets/Pages/Page1/Page2";
import Page3 from "./componenets/Pages/Page1/Page3";
import Page4 from "./componenets/Pages/Page1/Page4";
import Page5 from "./componenets/Pages/Page1/Page5";
import Auth from "./componenets/Auth/Auth";
import logo from "./logo.svg";
import { Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import "./App.css";

import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Form from "./componenets/Form/Form";
import Posts from "./componenets/Posts/Posts";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import Vlog from "./Vlog";
import BLog from "./componenets/Blog/BLog";
import Todo from "./componenets/Todotaks/Todo";
import Gettstarted from "./componenets/LoginSignup/Gettstarted";
import Workout from "./componenets/Herosections/workout/Workout";
// import Yoga from "./componenets/Herosections/Yoga/Yoga";
import Yoga from "./componenets/version2/Yoga/Yoga";
import BeginerMain from "./componenets/version2/Yoga/Beginer/Begin/Beginmain";
import BeginerMain1 from "./componenets/version2/Yoga/Beginer/Begin/Bageinmain1";
import BeginerMain2 from "./componenets/version2/Yoga/Beginer/Begin/Bageinmain2";
import BeginerMain3 from "./componenets/version2/Yoga/Beginer/Begin/Bageinmain3";
import BeginerMain4 from "./componenets/version2/Yoga/Beginer/Begin/Bageinmain4";
import IntermediateYoga from "./componenets/version2/Yoga/Beginer/Intermediate/IntermediateYoga";
import IntermediateYoga1 from "./componenets/version2/Yoga/Beginer/Intermediate/Intermediateyoga1";
import IntermediateYoga2 from "./componenets/version2/Yoga/Beginer/Intermediate/Intermediateyoga2";
import IntermediateYoga3 from "./componenets/version2/Yoga/Beginer/Intermediate/Intermediateyoga3";
import IntermediateYoga4 from "./componenets/version2/Yoga/Beginer/Intermediate/Intermediateyoga4";
import Advanceyoga from "./componenets/version2/Yoga/Beginer/Advancedyoga/Advanceyoga";
import Advanceyoga1 from "./componenets/version2/Yoga/Beginer/Advancedyoga/Advancedyoga1";
import Advanceyoga2 from "./componenets/version2/Yoga/Beginer/Advancedyoga/Advancedyoga2";
import Advanceyoga3 from "./componenets/version2/Yoga/Beginer/Advancedyoga/Advancedyoga3";
import Advanceyoga4 from "./componenets/version2/Yoga/Beginer/Advancedyoga/Advancedyoga4";
import Stopwatch from "./componenets/Stopwatch/Stopwatch";
import Main from "./componenets/version2/Main";
import Service from "./componenets/version2/ImageSlider/Service";
import Contactus from "./componenets/version2/ImageSlider/Contactus";
function App() {
  const location = useLocation();

  // const [currentId, setCurrentId] = useState(0);
  // const classes = useStyles()
  // const dispatch = useDispatch()
  // useEffect(()=>{
  //   dispatch(getPosts())
  // },[currentId, dispatch])
  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          {/* <Route path="/">
            <Todo />
          </Route> */}
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/page1">
            <Page1 />
          </Route>
          <Route path="/page2">
            <Page2 />
          </Route>
          <Route path="/page3">
            <Page3 />
          </Route>
          <Route path="/page4">
            <Page4 />
          </Route>
          <Route path="/page5">
            <Page5 />
          </Route>
          <Route path="/service">
            <Service />
          </Route>  
          <Route path="/contactus">
            <Contactus />
          </Route>  
          <Route path="/workout">
            <Workout />
          </Route>
          <Route path="/yoga">
            <Yoga />
          </Route>
          <Route path="/vlog">
            <Vlog />
          </Route>
          <Route path="/bot">
            <Bot />
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/blog">
            <BLog />
          </Route>
          <Route path="/login">
            <Gettstarted />
          </Route>
          <Route path="/yoga">
            <Yoga />
          </Route>
          <Route exact path="/yogabeginer" component={BeginerMain} />
          <Route exact path="/yogabeginer1" component={BeginerMain1} />
          <Route exact path="/yogabeginer2" component={BeginerMain2} />
          <Route exact path="/yogabeginer3" component={BeginerMain3} />
          <Route exact path="/yogabeginer4" component={BeginerMain4} />
          <Route exact path="/intermediateyoga" component={IntermediateYoga} />
          <Route
            exact
            path="/intermediateyoga1"
            component={IntermediateYoga1}
          />
          <Route
            exact
            path="/intermediateyoga2"
            component={IntermediateYoga2}
          />
          <Route
            exact
            path="/intermediateyoga3"
            component={IntermediateYoga3}
          />
          <Route
            exact
            path="/intermediateyoga4"
            component={IntermediateYoga4}
          />
          <Route exact path="/advanceyoga" component={Advanceyoga} />
          <Route exact path="/advanceyoga1" component={Advanceyoga1} />
          <Route exact path="/advanceyoga2" component={Advanceyoga2} />
          <Route exact path="/advanceyoga3" component={Advanceyoga3} />
          <Route exact path="/advanceyoga4" component={Advanceyoga4} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
