import { makeStyles } from "@mui/styles";

const useContactStyles = makeStyles({
  contactSection: {
    height: "110vh",
    fontFamily: "Century Gothic",
  },
  container: {
    padding: "10rem 11rem",
    textAlign: "center",
    "@media(max-width: 900px)": {
      padding: 0,
      paddingTop: 150
    },
  },
  title: {
    fontSize: 40,
    marginBottom: 0,
    "@media(max-width: 900px)": {
      fontSize: 30,
    },
  },
  paragraph: {
    fontSize: 23,
    color: "#B3B3B3",
    "@media(max-width: 900px)": {
      fontSize: 15,
    },
  },
  divider: {
    border: "2px solid #128FFF",
    width: "20%",
    alignSelf: "center",

  },
  input: {
    "&.MuiFormControl-root": {
      marginBottom: 20,
      width: "90%",
    },
  },
  messageContainer: {
    paddingTop: 60,
    "@media(max-width: 900px)": {
      paddingTop: 20,
    },
  },
  button: {
    "&.MuiButton-root": {
      backgroundColor: "#128FFF",
      width: 150,
      height: 45,
      borderRadius: 15,
      fontFamily: "Century Gothic",
      fontSize: 20,
      textTransform: "none",
    },
  },
});

export default useContactStyles;
