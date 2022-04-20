import { makeStyles } from "@mui/styles";
import { padding, textAlign } from "@mui/system";

const useIntroductionStyles = makeStyles({
  container: {
    "&.MuiGrid-root": {
      marginTop: 200,
      padding: "0 180px",
      fontFamily: "Century Gothic",
    },
  },
  hello: {
    fontSize: 70,
    letterSpacing: 3,
  },
  name: {
    fontSize: 70,
    fontWeight: "bold",
    color: "#128FFF",
    letterSpacing: 3,
  },
  title: {
    fontSize: 40,
    color: "#B3B3B3",
    letterSpacing: 2,
  },
  divider: {
    border: "2px solid #128FFF",
    width: "80%",
    marginLeft: 0,
    marginTop: 20,
  },
  paragraph: {
    fontSize: 25,
    color: "#B3B3B3",
  },
  button: {
    backgroundColor: "#128FFF",
    width: 150,
    height: 35,
    borderRadius: 15,
    fontFamily: "Century Gothic",
    fontSize: 18,
    textTransform: "none",
    textAlign: "center",
    paddingTop: 12,
    "&:hover": {
      cursor: "pointer",
      backgroundColor: '#1976d2'
    },
  },
  image: {
    height: 100,
    width: 100,
    "&.MuiAvatar-root": {
      height: 350,
      width: 350,
      marginRight: 100,
      bottom: 40,
      border: "10px solid #128FFF",
    },
  },
});

export default useIntroductionStyles;
