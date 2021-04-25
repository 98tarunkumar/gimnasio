import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    margin:'10px 10px',
    borderRadius:'10px',
    backgroundColor:'rgba(255,255,255,0.8)',
    height:theme.spacing(86), 
    padding: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
    marginLeft:'-130px'
  },
  buttonSubmit: {
    marginBottom: 10,
  }
}));
