import { makeStyles } from "@mui/styles";

const useSkillsStyle = makeStyles({
  skillSection: {
    height: "110vh",
    backgroundColor: "black",
    color: "#FFFFFF",
    fontFamily: "Century Gothic",
    width: '100%'
  },
  container: {
    padding: "10rem 11rem",
    textAlign: "center",
    "@media(max-width: 900px)": {
      padding: 0,
      paddingTop: 140,
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
      fontSize: 14,
      width: "100%",
    },
  },
  divider: {
    border: " solid #128FFF",
    width: "20%",
    alignSelf: "center",
    "@media(max-width: 900px)": {
      width: "50%",
    },
  },
  skillContainer: {
    marginLeft: 140,
    marginTop: 50,
    "@media(max-width: 900px)": {
      marginLeft: 0,
      justifyContent: 'center'
    },
  },
});
export default useSkillsStyle;
