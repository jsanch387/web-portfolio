import { Grid } from "@mui/material";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import useSkillsStyle from "./Skills.style";

const skillSetOne = [
  {
    id: 1,
    name: "React",
    complete: "50",
  },
  {
    id: 2,
    name: "JavaScript",
    complete: "40",
  },
  {
    id: 3,
    name: "Adobe XD",
    complete: "10",
  },
];

const skillSetTwo = [
  {
    id: 1,
    name: "CSS",
    complete: "50",
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
            {skillSetOne.map((skill) => {return (<ProgressBar title={skill.name} complete={skill.complete}/>)})}
          </Grid>
          <Grid item container xs={6} direction='column' >
          {skillSetTwo.map((skill) => {return (<ProgressBar title={skill.name} complete={skill.complete}/>)})}
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default Skills;
