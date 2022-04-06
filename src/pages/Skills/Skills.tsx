import { Grid } from "@mui/material";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import useSkillsStyle from "./Skills.style";

const currentSkills = [
  {
    id: 1,
    name: "React",
    complete: "70",
  },
  {
    id: 1,
    name: "JavaScript",
    complete: "40",
  },
  {
    id: 1,
    name: "Adobe",
    complete: "30",
  },
  {
    id: 1,
    name: "HTML",
    complete: "90",
  },
];

const Skills = (): JSX.Element => {
  const classes = useSkillsStyle();
  return (
    <section id="skills" className={classes.skillSection}>
      <Grid container className={classes.container}>
        <Grid item container justifyContent="center" direction="column">
          <h1 className={classes.title}>Skills </h1>
          <p className={classes.paragraph}>
            These are some of the tools and technologies that I use to develop
            web applications. I plan to master each skill <br /> and continue
            developing creative new applications along with learning more
            skills.
          </p>
          <hr className={classes.divider} />
        </Grid>
        <Grid container className={classes.skillContainer}>
          <Grid item container xs={6} direction='column'>
            <ProgressBar title='react' complete='50'/>
            <ProgressBar title='react' complete='50'/>
            <ProgressBar title='react' complete='50'/>
          </Grid>
          <Grid item container xs={6} direction='column' >
            <ProgressBar title='react' complete='50'/>
            <ProgressBar title='react' complete='50'/>
            <ProgressBar title='react' complete='50'/>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default Skills;
