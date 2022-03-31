import { makeStyles } from "@mui/styles";

const useSkillsStyle = makeStyles({
    skillSection: {
        height: "110vh",
        fontFamily: "Hubballi, cursive",
        backgroundColor: 'black',
        color: '#FFFFFF'
      },
      container: {
        padding: "10rem 11rem",
        textAlign: 'center'
      },
      title: {
        fontSize: 45,
        marginBottom: 0
      },
      paragraph: {
          fontSize: 25,
          color: "#B3B3B3",
      },
      divider: {
        border: " solid #128FFF",
        width: "20%",
        alignSelf: 'center'
      },
});
export default useSkillsStyle;
