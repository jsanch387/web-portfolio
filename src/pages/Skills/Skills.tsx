import { Grid } from "@mui/material";
import useSkillsStyle from "./Skills.style";

const Skills = (): JSX.Element => {
  const classes = useSkillsStyle();
  return (
    <section id="skills" className={classes.skillSection}>
      <Grid container className={classes.container}>
        <Grid item container justifyContent="center" direction="column">
          <h1 className={classes.title}>Skills </h1>
          <p className={classes.paragraph}>
            These are some of the tools and technologies that I use to develop
            web applications. I plan to master each skill <br/> and continue
            developing creative new applications along with learning more skills.
          </p>
          <hr className={classes.divider} />
        </Grid>
      </Grid>
    </section>
  );
};

export default Skills;
