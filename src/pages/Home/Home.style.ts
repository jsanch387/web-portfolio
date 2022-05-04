import { makeStyles } from "@mui/styles";

const useHomeStyles = makeStyles({
  section: {
    height: "100vh",
    backgroundColor: "black",
    paddingTop: 130,
    color: "white",
    "@media(max-width: 900px)": {
      width: "auto",
      height: "100vh",
    },
  },
});

export default useHomeStyles;
