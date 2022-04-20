import { makeStyles } from "@mui/styles";

const useAboutStyles = makeStyles({
  section: {
    height: "110vh",
    fontFamily: "Century Gothic",
  },
  container: {
    padding: "10rem 11rem",
  },
  title: {
    fontSize: 40,
    marginBottom: 0
  },
    divider: {
        border: " solid #128FFF",
        width: "17%",
        marginLeft: 0,
      },
      svg: {
          color: 'red',
          paddingRight: 300,
          paddingTop: 30
      }
});

export default useAboutStyles;
