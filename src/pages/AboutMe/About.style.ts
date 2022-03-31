import { makeStyles } from "@mui/styles";

const useAboutStyles = makeStyles({
  section: {
    height: "110vh",
    fontFamily: "Hubballi, cursive",
  },
  container: {
    padding: "10rem 11rem",
  },
  title: {
    fontSize: 45,
    marginBottom: 0
  },
    divider: {
        border: " solid #128FFF",
        width: "20%",
        marginLeft: 0,
      },
      svg: {
          color: 'red',
          paddingRight: 300,
          paddingTop: 30
      }
});

export default useAboutStyles;
