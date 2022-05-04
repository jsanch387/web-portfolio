import { Avatar, Grid, } from "@mui/material";
import { Link } from 'react-scroll';
import useIntroductionStyles from "./Introduction.style";

const Introduction = (): JSX.Element => {

  const classes = useIntroductionStyles();
  return (
      <Grid container className={classes.container} columnSpacing={6}>
        <Grid item container xs={12} md={6} >
          <Avatar className={classes.image} />
        </Grid>
        <Grid item xs={12} md={6} container direction="column" className={classes.introContainer}>
          <span className={classes.hello}>Hello, I'm</span>
          <span className={classes.name}>Jesus Sanchez</span>
          <span className={classes.title}>Frontend Developer</span>
          <hr className={classes.divider} />
          <p className={classes.paragraph}>
            I am a Frontend Developer looking to learn Full Stack Development. I
            enjoy designing and developing web applications. I hope to create
            various full stack apps in the future.
          </p>
          <Link to="contact" spy={true} smooth={true} offset={50} duration={500} className={classes.button}>Contact</Link>
        </Grid>
      </Grid>
  );
};
export default Introduction;
