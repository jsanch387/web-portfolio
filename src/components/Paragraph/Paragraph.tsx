import { Grid } from "@mui/material";
import useParagraphStyles from './Paragraph.style'

type ParagraphProps = {
  title: string;
  description: string;
};

const Paragraph = ({ title, description }: ParagraphProps): JSX.Element => {
  const classes = useParagraphStyles();
  return (
    <Grid item container direction="column">
      <Grid item>
        <h1 className={classes.title}>{title}</h1>
      </Grid>
      <Grid item>
        <p className={classes.paragraph}>{description}</p>
      </Grid>
    </Grid>
  );
};

export default Paragraph;
