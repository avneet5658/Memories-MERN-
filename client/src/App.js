import React, { useEffect, useState } from "react";
import { AppBar, Container, Grid, Grow, Typography } from "@material-ui/core";
import memories from "./images/memories.png";
import Form from "./component/Form/Form";
import Posts from "./component/Posts/posts";
import useStyles from "./style";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
const App = () => {
  const [currentId, setCurrentId] = useState();
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <div>
      <Container maxwidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">
            Memories
          </Typography>
          <img
            className={classes.image}
            src={memories}
            alt="memories"
            height="50"
          />
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch">
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
  );
};

export default App;
