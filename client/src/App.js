
import Bot from "./componenets/Bot/Bot";
import Page1 from "./componenets/Pages/Page1/Page1";
import Page2 from "./componenets/Pages/Page1/Page2";
import Page3 from "./componenets/Pages/Page1/Page3";
import Page4 from "./componenets/Pages/Page1/Page4";
import Page5 from "./componenets/Pages/Page1/Page5";
import Auth from "./componenets/Auth/Auth";
import { Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import "./App.css";

import Vlog from "./Vlog";
import BLog from "./componenets/Blog/BLog";
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
import Main from "./componenets/version2/Main";
import Service from "./componenets/version2/ImageSlider/Service";
import Contactus from "./componenets/version2/ImageSlider/Contactus";
import Cpage1 from "./componenets/version2/Calisthenics/Begin/Cpage1";
import Cpage2 from "./componenets/version2/Calisthenics/Begin/Cpage2";
import Cpage3 from "./componenets/version2/Calisthenics/Begin/Cpage3";
import Cpage4 from "./componenets/version2/Calisthenics/Begin/Cpage4";
import Cpage5 from "./componenets/version2/Calisthenics/Begin/Cpage5";
import Cal from "./componenets/Herosections/Calistenics/Cal";
import Intercal1 from "./componenets/version2/Calisthenics/Intermediate/Intercal1";
import Intercal2 from "./componenets/version2/Calisthenics/Intermediate/Intercal2";
import Intercal3 from "./componenets/version2/Calisthenics/Intermediate/Intercal3";
import Intercal4 from "./componenets/version2/Calisthenics/Intermediate/Intercal4";
import Intercal5 from "./componenets/version2/Calisthenics/Intermediate/Intercal5";
import Advcal1 from "./componenets/version2/Calisthenics/Advanced/Advcal1";
import Advcal2 from "./componenets/version2/Calisthenics/Advanced/Advcal2";
import Advcal3 from "./componenets/version2/Calisthenics/Advanced/Advcal3";
import Advcal4 from "./componenets/version2/Calisthenics/Advanced/Advcal4";
import Advcal5 from "./componenets/version2/Calisthenics/Advanced/Advcal5";
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
          <Route path="/calestenics">
            <Cal/>
          </Route>
          <Route path="/calbegin1">
            <Cpage1/>
          </Route>
          <Route path="/calbegin2">
            <Cpage2/>
          </Route>
          <Route path="/calbegin3">
            <Cpage3/>
          </Route>
          <Route path="/calbegin4">
            <Cpage4/>
          </Route>
          <Route path="/calbegin5">
            <Cpage5/>
          </Route>
          <Route path="/calinter1">
          <Intercal1/>
          </Route>
          <Route path="/calinter2">
          <Intercal2/>
          </Route>
          <Route path="/calinter3">
          <Intercal3/>
          </Route>
          <Route path="/calinter4">
          <Intercal4/>
          </Route>
          <Route path="/calinter5">
          <Intercal5/>
          </Route>
          <Route path='/advancecal1'>
            <Advcal1/>
          </Route>
          <Route path='/advancecal2'>
            <Advcal2/>
          </Route>
          <Route path='/advancecal3'>
            <Advcal3/>
          </Route>
          <Route path='/advancecal4'>
            <Advcal4/>
          </Route>
          <Route path='/advancecal5'>
            <Advcal5/>
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
