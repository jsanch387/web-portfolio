import { Grid } from "@mui/material";
import useContactStyles from "./Contact.style";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";

const Contact = (): JSX.Element => {
  const classes = useContactStyles();
  return (
    <section id="contact" className={classes.contactSection}>
      <Grid container className={classes.container}>
        <Grid item container justifyContent="center" direction="column">
          <h1 className={classes.title}>Contact</h1>
          <p className={classes.paragraph}>
            Feel free to contact me with any questions.
          </p>
          <hr className={classes.divider} />
        </Grid>
        <Grid item container className={classes.messageContainer}>
          <Grid item xs={4}>
            Image
          </Grid>
          <Grid item container xs={8} direction="column">
            <TextField
              id="outlined-basic"
              label="Your Name"
              variant="outlined"
              className={classes.input}
            />
            <TextField
              id="outlined-basic"
              label="Your Email"
              variant="outlined"
              className={classes.input}
            />
            <TextField
              id="outlined-basic"
              label="Message"
              variant="outlined"
              className={classes.input}
              multiline={true}
              rows={4}
            />
            <Button variant="contained" className={classes.button}>
            Send
          </Button>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
};

export default Contact;
