import { makeStyles } from "@mui/styles";

const useContactStyles = makeStyles({
  contactSection: {
    height: "110vh",
    fontFamily: "Century Gothic",
  },
  container: {
    padding: "10rem 11rem",
    textAlign: "center",
  },
  title: {
    fontSize: 40,
    marginBottom: 0,
  },
  paragraph: {
    fontSize: 23,
    color: "#B3B3B3",
  },
  divider: {
    border: " solid #128FFF",
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
