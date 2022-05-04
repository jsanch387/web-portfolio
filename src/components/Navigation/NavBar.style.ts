import { makeStyles } from "@mui/styles";

const useNavBarStyles = makeStyles({
  nav: {
    backgroundColor: "#404040",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    opacity: "90%",
    overflow: "hidden",
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 99,
    fontFamily: "Century Gothic",
  },
  logo: {
    margin: "0 0 0 150px",
  },
  linksContainer: {
    opacity: "90%",
    backgroundColor: "#404040",
    display: "inline",
    marginRight: 150,
    "& li": {
      display: "inline",
      padding: "0 50px",
      color: "white",
    },
    "& a": {
      color: "white",
      textDecoration: "none",
      fontSize: 20,
      borderBottom: "3px solid transparent",
      paddingBottom: 20,
      backgroundColor: "#404040",
      opacity: "90%",
    },
    "& a.active": {
      borderBottom: "3px solid #128FFF",
    },
    "& a:hover": {
      cursor: "pointer",
      color: "#128FFf",
    },
  },
  hamburger: {
    marginRight: 140,
    display: "none",
    cursor: "pointer",
 
  },

  span: {
    marginTop: 10,
    display: "block",
    width: 50,
    height: 6,
    backgroundColor: "white",
    margin: "5px auto",
    "-webkit-transition": "all 0.3s ease-in-out",
  },
});

export default useNavBarStyles;
