import React from "react";
import { Typography, AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { FaHome } from "react-icons/fa";
import Sidebar from "./component/Sidebar";
import Notifications from "./component/Notifications";
import VideoPlaye from "./component/VideoPlayer";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 100px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "600px",
    border: "2px solid black",

    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  image: {
    marginLeft: "15px",
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
}));

const SubMain = () => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <>
      <FaHome
        style={{ width: "5%", height: "5%", cursor: "pointer" }}
        onClick={() => history.push("/Dashboard")}
      />
      <div className={classes.wrapper}>
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography variant="h2" align="center">
            Video Chat
          </Typography>
        </AppBar>
        <VideoPlaye />
        <Sidebar>
          <Notifications />
        </Sidebar>
      </div>
    </>
  );
};

export default SubMain;
