import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link,useHistory, useLocation } from "react-router-dom";
import "./Blog.css";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";

function NavBlog() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

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
    <div className="navcontent">
      <Link to='/' className="yogalinkgym">
      <div className="navlogo">Gimnasio</div>
      </Link>
      <div className="navlinks">
        {/* <span className="tt">HOME</span>
        <span className="tt">YOGA</span> */}
        
      </div>
      
      <div className="navuser">
      {user ? (
        <div className="navcontent">
          <div className="navtext">
            <Avatar
              className="navavatar"
              alt={user.result.name}
              src={user.result.imageUrl}
            >
              {user.result.name.charAt(0)}
            </Avatar>
            <Typography className="navusertext" variant="h6">
              {user.result.name}
            </Typography>
            <Button
              className="logout"
              variant="contained"
              color="secondary"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
          </div>
        ) : (
          <Button className="navbtn"
            component={Link}
            to="/auth"
            variant="contained"
            color="primary"
          >
            SignIn
          </Button>
        )}
        
      </div>
    </div>
  );
}

export default NavBlog;
