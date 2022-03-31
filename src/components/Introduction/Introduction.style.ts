import { makeStyles } from "@mui/styles";

const useIntroductionStyles = makeStyles({
  container: {
    '&.MuiGrid-root': {
      marginTop: 200,
      padding: '0 180px'
    }
  },
  hello: {
    fontSize: 70,
    fontFamily: "Hubballi, cursive",
    letterSpacing: 3,
  },
  name: {
    fontSize: 70,
    fontFamily: "Hubballi, cursive",
    fontWeight: "bold",
    color: "#128FFF",
    letterSpacing: 3,
  },
  title: {
    fontSize: 40,
    fontFamily: "Hubballi, cursive",
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
    fontFamily: "Hubballi, cursive",
    fontSize: 25,
    color: "#B3B3B3",
  },
  button: {
    "&.MuiButton-root": {
      backgroundColor: "#128FFF",
      width: 150,
      height: 45,
      borderRadius: 15,
      fontFamily: "Hubballi, cursive",
      fontSize: 20,
      textTransform: 'none'
    },
  },
  image: {
    height: 100,
    width: 100,
    '&.MuiAvatar-root': {
      height: 350,
      width: 350,
      marginRight: 100,
      bottom: 40,
      border: '10px solid #128FFF'
    }
  }
});

export default useIntroductionStyles;
