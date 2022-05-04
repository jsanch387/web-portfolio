import { makeStyles } from "@mui/styles";

const useAboutStyles = makeStyles({
  section: {
    height: "110vh",
    fontFamily: "Century Gothic",
  },
  container: {
    padding: "10rem 11rem",
    "@media(max-width: 900px)": {
      padding: 0,
      paddingTop: 150,
    },
  },
  title: {
    fontSize: 40,
    marginBottom: 0,
    "@media(max-width: 900px)": {
      fontSize: 30,
      textAlign: "center",
    },
  },
  divider: {
    border: "2px solid #128FFF",
    width: "17%",
    "@media(min-width: 900px)": {
      marginLeft: 0,
    },
    "@media(max-width: 900px)": {
      textAlign: "center",
    },
  },
  svg: {
    color: "red",
    paddingTop: 30,
    "@media(max-width: 900px)": {
      paddingTop: 20,
    },
  },

});

export default useAboutStyles;
