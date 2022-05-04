import { makeStyles } from "@mui/styles";

const useIntroductionStyles = makeStyles({
  container: {
    "&.MuiGrid-root": {
      marginTop: 200,
      padding: "0 180px",
      fontFamily: "Century Gothic",
      "@media(max-width: 900px)": {
        marginTop: '40%',
        padding: 5,
       
      },
    },
    
  },
  hello: {
    fontSize: 70,
    letterSpacing: 3,
    "@media(max-width: 900px)": {
      fontSize: 30,
    },
  },
  name: {
    fontSize: 70,
    fontWeight: "bold",
    color: "#128FFF",
    letterSpacing: 3,
    "@media(max-width: 900px)": {
      fontSize: 35,
    },
  },
  title: {
    fontSize: 40,
    color: "#B3B3B3",
    letterSpacing: 2,
    "@media(max-width: 900px)": {
      fontSize: 18,
      marginTop: 5
    },
  },
  divider: {
    border: "2px solid #128FFF",
    width: "80%",
    marginLeft: 0,
    marginTop: 20,
    "@media(max-width: 900px)": {
      marginLeft: 'auto',
      marginRight: 'auto',
      textAlign: "center",
    },
  },
  paragraph: {
    fontSize: 25,
    color: "#B3B3B3",
    '@media(max-width: 900px)': {
      fontSize: 18,
      padding: 5
    },
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
      backgroundColor: "#1976d2",
    },
    "@media(max-width: 900px)": {
      marginLeft: 'auto',
      marginRight: 'auto',
    
    },
  },
  introContainer: {
    "@media(max-width: 900px)": {
      paddingTop: 0,
      textAlign: "center",
    },
  },
  image: {
    "&.MuiAvatar-root": {
      height: 350,
      width: 350,
      border: "10px solid #128FFF",
      "@media(max-width: 900px)": {
        height: 200,
        width: 200,
        marginRight: 'auto',
        marginLeft: 'auto',
        top: -100,
        border: "5px solid #128FFF",
      },
    },
  },
});

export default useIntroductionStyles;
