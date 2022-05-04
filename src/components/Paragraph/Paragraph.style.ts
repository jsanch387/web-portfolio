import { makeStyles } from "@mui/styles";

const useParagraphStyles = makeStyles({
  title: {
    color: "#128FFF",
    marginBottom: 0,
    fontSize: 35,
    fontWeight: "bold",
    fontFamily: "Century Gothic",
    "@media(max-width: 900px)": {
      textAlign: 'center',
      fontSize: 20
    },
  },
  paragraph: {
    fontSize: 23,
    marginBottom: 0,
    marginTop: 25,
    fontFamily: "Century Gothic",
    "@media(max-width: 900px)": {
      textAlign: 'center',
      fontSize: 15,
      lineHeight: 1.5,
      marginTop: 10,
      paddingLeft: 5,
      paddingRight: 5
    },
  },
});

export default useParagraphStyles;
