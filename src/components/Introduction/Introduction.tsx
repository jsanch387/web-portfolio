import { Avatar, Grid } from "@mui/material";
import { Button } from "@mui/material";
import useIntroductionStyles from "./Introduction.style";

const Introduction = (): JSX.Element => {
  const classes = useIntroductionStyles();
  return (
      <Grid container className={classes.container}>
        <Grid item xs={6} container direction="column">
          <span className={classes.hello}>Hello, I'm</span>
          <span className={classes.name}>Jesus Sanchez</span>
          <span className={classes.title}>Frontend Developer</span>
          <hr className={classes.divider} />
          <p className={classes.paragraph}>
            I am a Frontend Developer looking to learn Full Stack Development. I
            enjoy designing and developing web applications. I hope to create
            various full stack apps in the future.
          </p>
          <Button variant="contained" className={classes.button}>
            Contact
          </Button>
        </Grid>
        <Grid item container xs={6} justifyContent="right">
          <Avatar className={classes.image} />
        </Grid>
      </Grid>
  );
};
export default Introduction;
