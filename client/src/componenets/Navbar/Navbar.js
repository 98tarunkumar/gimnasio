import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  console.log(user);

  const logout = () => {
    dispatch({ type: "LOGOUT" });

    history.push("/blog");
    setUser(null);
  };

    useEffect(() => {
      const token = user?.token;

      setUser(JSON.parse(localStorage.getItem("profile")));
    }, [location]);
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          variant="h2"
          align="center"
        >
          Insights
        </Typography>
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant="h6">
              {user.result.name}
            </Typography>
            <Button
              className={classes.logout}
              variant="contained"
              color="secondary"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            SignIn
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
