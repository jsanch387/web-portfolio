import { Grid } from "@mui/material";
import Paragraph from "../../components/Paragraph/Paragraph";

import useAboutStyles from "./About.style";

const AboutMe = (): JSX.Element => {
  const classes = useAboutStyles();

  const paragraph1 =
    "I enjoy Software Development and watching projects come together from start to finish. I am fairly new to development and have a lot to learn but, I hope to develop and design many more apps in the future. I enjoy the process and looking forward to gaining more knowledge.";

  const paragraph2 =
    "I currently develop frontend code for General Motors. I work on the Online Service Scheduling team and help develop code for various of their applications. I am also helping out with production support and DevOps on the team exposing myself to more of the operation.";

  const paragraph3 =
    "I want to continue learning Web Development and become a Full Stack Developer to better understand the complete application lifecycles. I am also interested in learning Software Architecture after mastering Full Stack Development.";

  return (
    <section id="about" className={classes.section}>
      <Grid container className={classes.container}>
        <Grid item container>
          <Grid item xs={6}>
            <h1 className={classes.title}>About Me</h1>
            <hr className={classes.divider} />
          </Grid>
          <Grid item container xs={6} justifyContent="right">
            <h1 className={classes.svg}>picture</h1>
          </Grid>
        </Grid>
        <Grid item container direction="column" spacing={0}>
          <Grid item>
            <Paragraph title={"Myself"} description={paragraph1} />
          </Grid>
          <Grid item>
            <Paragraph title={"Career"} description={paragraph2} />
          </Grid>
          <Grid item>
            <Paragraph title={"Goals"} description={paragraph3} />
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default AboutMe;
