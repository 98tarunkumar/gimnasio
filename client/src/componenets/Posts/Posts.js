import React from "react";
import Post from "./Post/Post";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
import "./styles.css";

const Posts = ({ setCurrentId }) => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return !posts.length ? (
    <CircularProgress thickness="5" color="primary" size="6rem" />
  ) : (
    <div className="container">
      {posts.map((post) => (
        <Grid key={post._id}  className="post">
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </div>
  );
};

export default Posts;
