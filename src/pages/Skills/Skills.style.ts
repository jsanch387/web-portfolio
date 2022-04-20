import { makeStyles } from "@mui/styles";

const useSkillsStyle = makeStyles({
    skillSection: {
        height: "110vh",
        backgroundColor: 'black',
        color: '#FFFFFF',
        fontFamily: "Century Gothic",

      },
      container: {
        padding: "10rem 11rem",
        textAlign: 'center'
      },
      title: {
        fontSize: 40,
        marginBottom: 0
      },
      paragraph: {
          fontSize: 23,
          color: "#B3B3B3",
      },
      divider: {
        border: " solid #128FFF",
        width: "20%",
        alignSelf: 'center'
      },
      skillContainer: {
      marginLeft: 140,
      marginTop: 50
      }
});
export default useSkillsStyle;
