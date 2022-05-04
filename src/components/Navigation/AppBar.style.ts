import { makeStyles } from "@mui/styles";

const useAppBarStyle = makeStyles({
  nav: {
    "&.MuiPaper-root": {
      backgroundColor: "#404040",
      height: 100,
      opacity: "90%",
      fontFamily: "Century Gothic",
      padding: 40,
    },
  },
  navLinks: {
    fontSize: 20,
    paddingRight: "10%",
    paddingBottom: 10,
    backgoundColor: "#404040",
    "&.active": {
      borderBottom: "3px solid #128FFF",
    },
    "&:hover": {
      cursor: "pointer",
      color: "#128FFF",
    },
    "@media(max-width: 800px)": {
      cursor: "pointer",
      "&:hover": {
        color: "#128FFF",
      },
      "&.active": {
        borderBottom: "none",
      },
    },
  },
  navItems: {
    backgroundColor: "#404040",
    opacity: "90%",
    paddingLeft: 100,
    paddingRight: 100,
    "@media(max-width: 900px)": {
      padding:  0
    },
  },
  linkContainer: {
    backgroundColor: "#404040",
    opacity: "90%",
  },
  menuIcon: {
    paddingRight: 0,
  },
  mobileMenu: {
    "&.MuiGrid-root": {
      marginTop: 30,
      paddingBottom: 30,
    },
    backgroundColor: "#404040",
  },
});

export default useAppBarStyle;
